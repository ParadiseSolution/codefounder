import { useState, useEffect } from 'react'

export function useActivePath() {
  const [path, setPath] = useState('')

  useEffect(() => {
    // Get initial path
    setPath(window.location.pathname)

    // Update path on navigation
    const handleRouteChange = () => {
      setPath(window.location.pathname)
    }

    window.addEventListener('popstate', handleRouteChange)
    return () => window.removeEventListener('popstate', handleRouteChange)
  }, [])

  return path
}