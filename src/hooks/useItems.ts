import { useState } from "react"

/**
 * todo: fetch data from API
 */
export function useItems(): [ready: boolean, items: Array<Item>] {
  const [ready, setReady] = useState(false)
  const [items, setItems] = useState<Item[]>([])

  import("../fixtures/items").then((module) => {
    setItems(module.default)
    setReady(true)
  })

  return [ready, items]
}
