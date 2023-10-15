import { Link } from "react-router-dom"

/**
 * @param item {Item}
 * @returns {JSX.Element}
 * @constructor
 */
export default function Element({ item }) {
  return (
    <div>
      <h2>{item.name}</h2>
      <Link to={`/element/${item.id}`}>Show</Link>
    </div>
  )
}
