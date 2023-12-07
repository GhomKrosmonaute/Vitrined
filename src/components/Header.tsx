import React from "react"
import * as website from "../website"
import { Link } from "react-router-dom"

export default function Header({ className }: { className?: string }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  return (
    <header className={className}>
      <div className="absolute text-4xl text-green-300 left-1/2 -translate-x-1/2 uppercase">
        <Link to="/">{website.name}</Link>
      </div>

      <nav className="pl-2 container mx-auto">
        <ul className="gap-3 hidden md:flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/elements">Elements</Link>
          </li>
        </ul>
        <button
          className="md:hidden mt-2"
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            color="currentColor"
            className="fill-current"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>

        <div
          className={
            isMenuOpen
              ? "md:hidden bg-black w-full absolute left-0 pb-3 pl-5"
              : "hidden"
          }
        >
          <ul className="flex-col">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/elements">Elements</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
