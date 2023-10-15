import { useState } from "react"

/**
 * todo: fetch data from API
 * @return {[boolean,Array<Item>]}
 */
export function useItems() {
  const [ready, setReady] = useState(false)
  const [items, setItems] = useState([])

  import("../fixtures/items.js").then((module) => {
    setItems(module.default)
    setReady(true)
  })

  return [ready, items]
}
