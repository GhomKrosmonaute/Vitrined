import { useItems } from "../hooks/useItems"

import Element from "../components/Element"
import Mosaic from "../components/Mosaic"

export default function Elements() {
  const [, items] = useItems()

  return (
    <Mosaic
      elements={items.map((item, index) => {
        return <Element key={index} item={item} />
      })}
    />
  )
}
