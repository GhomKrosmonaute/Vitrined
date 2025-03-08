import { useState, useEffect } from "react"

import makeItems from "../fixtures/items"

/**
 * todo: fetch data from API
 */
export function useItems(): [ready: boolean, items: Array<Item>] {
  const [ready, setReady] = useState(false)
  const [items, setItems] = useState<Item[]>([])

  useEffect(() => {
    setItems(makeItems())
    setReady(true)
  }, [])

  return [ready, items]
}
