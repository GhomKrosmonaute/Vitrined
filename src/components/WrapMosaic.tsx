import React from "react"

import WrapElement from "./WrapElement"

export default function WrapMosaic({ children }: { children: Item[] }) {
  return (
    <div className="w-full flex flex-wrap">
      {children.map((item, index) => {
        return <WrapElement key={index} item={item} />
      })}
    </div>
  )
}
