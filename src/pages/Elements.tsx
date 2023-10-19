import React from "react"

import { useItems } from "../hooks/useItems"

import WrapMosaic from "../components/WrapMosaic"

export default function Elements() {
  const [, items] = useItems()

  return <WrapMosaic>{items}</WrapMosaic>
}
