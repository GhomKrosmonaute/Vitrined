import React from "react"

import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header>
      <nav>
        <ul className="flex gap-3 pl-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/elements">Elements</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
