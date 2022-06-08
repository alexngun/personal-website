import { useState, useEffect } from 'react'

export default function useOnScreen(ref) {

    const [isIntersecting, setIntersecting] = useState(false)
    var observer

    if(typeof window !== 'undefined') {
      observer = new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting)
      )
    }

    useEffect(() => {
      if(typeof window !== 'undefined') {
        observer.observe(ref.current)
        return () => { observer.disconnect() }
      }
    }, [])
  
    return isIntersecting
  }