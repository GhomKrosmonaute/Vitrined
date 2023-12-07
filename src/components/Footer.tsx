import React from "react"

export default function Footer({ className }: { className?: string }) {
  return (
    <footer className={className}>
      <div className="container mx-auto flex justify-center items-center h-[64px]">
        <span className="text-2xl">Footer</span>
      </div>
    </footer>
  )
}
