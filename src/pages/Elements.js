import { useItems } from "../hooks/useItems"

import Element from "../components/Element"
import FlexMosaic from "../components/FlexMosaic"
import GridMosaic from "../components/GridMosaic"

export default function Elements() {
  const [, items] = useItems()

  return (
    <FlexMosaic
      elements={items.map((item, index) => {
        return <Element key={index} item={item} />
      })}
    />
  )
}
