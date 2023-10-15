import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <nav className="bg-black text-amber-50">
      <ul className="flex gap-3">
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
