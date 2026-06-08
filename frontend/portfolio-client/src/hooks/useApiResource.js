import { useEffect, useState } from 'react'

export function useApiResource(loadResource, dependencies = []) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    async function load() {
      setIsLoading(true)
      setError(null)

      try {
        const result = await loadResource()
        if (isMounted) {
          setData(result)
        }
      } catch (requestError) {
        if (isMounted) {
          setError(requestError)
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    load()

    return () => {
      isMounted = false
    }
    // The caller owns the dependency list so one-shot page loads can stay one-shot.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)

  return { data, error, isLoading }
}
