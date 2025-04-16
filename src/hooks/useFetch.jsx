import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("error fetching data");

        const data = await res.json()
        if (!data) throw new Error('Error data json')
        setData(data)
        setIsPending(false)
        setError(null)
      } catch (error) {
        setIsPending(false)
        setError(error.message)
      }
    }

    fetchData()

  }, [url])

  return { data, isPending, error }
}

export default useFetch;