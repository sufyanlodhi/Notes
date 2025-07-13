import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'

export default function useGoToPage() {
  const navigate = useNavigate()

  const goToPage = useCallback((path) => {
    if (["/", "/contact", "/about"].includes(path)) {
      navigate(path)
    } else {
      console.warn("Invalid path:", path)
    }
  }, [navigate])

  return goToPage
}
