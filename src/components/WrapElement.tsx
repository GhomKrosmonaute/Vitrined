import React from "react"

import { Link } from "react-router-dom"

export default function WrapElement({ item }: { item: Item }) {
  return (
    <div
      style={{
        backgroundImage: `url(${item.image})`,
      }}
      className="
        flex flex-col justify-between p-4 bg-cover bg-center bg-no-repeat h-96
        w-full md:w-1/2 lg:w-1/3 xl:w-1/4
      "
    >
      <span className="text-3xl">{item.name}</span>
      <div className="flex gap-2">
        {/*Actions*/}
        <Link to={`/element/${item.id}`}>Show</Link>
        <Link to={`/element/${item.id}`}>Buy</Link>
      </div>
    </div>
  )
}
