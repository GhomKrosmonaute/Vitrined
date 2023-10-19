import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <nav className="flex items-center bg-black text-blue-100 text-2xl h-10">
      <ul className="flex gap-3 pl-2">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/elements">Elements</Link>
        </li>
      </ul>
    </nav>
  )
}
