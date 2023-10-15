import { useParams } from "react-router-dom"
import { useItems } from "../hooks/useItems"

/**
 * @return {JSX.Element}
 * @constructor
 */
export default function ElementPage() {
  const { id } = useParams()
  const [ready, items] = useItems()

  const item = ready
    ? items.find((item) => item.id === +id)
    : {
        id: 0,
        name: "Loading...",
        description: "Loading...",
      }

  return (
    <div>
      <h1>{item.name}</h1>
    </div>
  )
}
