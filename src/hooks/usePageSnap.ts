import { useEffect } from 'react'

const SNAP_IDLE_MS = 360

export function usePageSnap() {
  useEffect(() => {
    const getSections = () => Array.from(document.querySelectorAll<HTMLElement>('main > section'))
    const getHeaderHeight = () => Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 0
    const getTargetTop = (section: HTMLElement) => Math.max(0, section.getBoundingClientRect().top + window.scrollY - getHeaderHeight())
    let locked = false
    let unlockTimer: number | undefined
    let pageSnapClassAdded = false

    const armUnlock = () => {
      window.clearTimeout(unlockTimer)
      unlockTimer = window.setTimeout(() => {
        locked = false
      }, SNAP_IDLE_MS)
    }

    const goToAdjacent = (direction: 1 | -1) => {
      if (locked) return

      const sections = getSections()
      if (sections.length === 0) return

      const currentTop = window.scrollY
      const currentIndex = sections.reduce((index, section, sectionIndex) => {
        return getTargetTop(section) <= currentTop + 12 ? sectionIndex : index
      }, 0)
      const targetIndex = Math.min(sections.length - 1, Math.max(0, currentIndex + direction))

      if (targetIndex === currentIndex && direction === -1 && currentTop <= 12) return
      if (targetIndex === currentIndex && direction === 1) return

      locked = true
      // A direct jump keeps the target stable while the next section becomes
      // visible. Smooth scrolling combined with lazy layout can otherwise
      // overshoot and snap back on the later pages.
      window.scrollTo({
        top: getTargetTop(sections[targetIndex]),
        behavior: 'auto',
      })

      armUnlock()
    }

    const onWheel = (event: WheelEvent) => {
      event.preventDefault()

      if (!pageSnapClassAdded) {
        document.documentElement.classList.add('page-snap-enabled')
        pageSnapClassAdded = true
      }

      // Trackpads emit a long tail of small inertial events. Keep the gesture
      // locked until that tail has gone quiet, otherwise one upward swipe can
      // be interpreted as two page changes.
      if (locked) {
        armUnlock()
        return
      }

      const deltaY = event.deltaMode === 1
        ? event.deltaY * 16
        : event.deltaMode === 2
          ? event.deltaY * window.innerHeight
          : event.deltaY

      if (Math.abs(deltaY) < 4) return
      goToAdjacent(deltaY > 0 ? 1 : -1)
    }

    window.addEventListener('wheel', onWheel, { passive: false })

    return () => {
      if (pageSnapClassAdded) document.documentElement.classList.remove('page-snap-enabled')
      window.removeEventListener('wheel', onWheel)
      window.clearTimeout(unlockTimer)
    }
  }, [])
}
