import React from "react"

import { useParams } from "react-router-dom"
import { useItems } from "../hooks/useItems"

import Error404 from "./Error404"

export default function ElementPage() {
  const { id } = useParams()
  const [ready, items] = useItems()

  if (!id) return <Error404 />

  let item = items.find((item) => item.id === +id)

  if (!item) {
    if (ready) return <Error404 />

    item = {
      id: 0,
      name: "Loading...",
      description: "Loading...",
      image: "/placeholders/img_0.png",
      price: 3,
    }
  }

  return (
    <div className="flex">
      <div className="flex-1 p-2">
        <h1>{item.name}</h1>
        <p>{item.description}</p>
      </div>
      <div>
        <img src={item.image} alt="" />
      </div>
    </div>
  )
}
