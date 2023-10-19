import { Link } from "react-router-dom"

/**
 * @param item {Item}
 * @returns {JSX.Element}
 * @constructor
 */
export default function Element({ item }) {
  return (
    <div
      style={{
        backgroundImage: `url(${item.image})`,
      }}
      className="flex flex-col justify-between p-4 bg-cover bg-center bg-no-repeat h-96"
    >
      <span className="text-2xl">{item.name}</span>
      <div className="flex gap-2">
        {/*Actions*/}
        <Link to={`/element/${item.id}`}>Show</Link>
        <Link to={`/element/${item.id}`}>Buy</Link>
      </div>
    </div>
  )
}
