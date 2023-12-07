import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Main from "./components/Main"
import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Elements from "./pages/Elements"
import ElementPage from "./pages/ElementPage"
import Error404 from "./pages/Error404"

export default function App() {
  return (
    <Router>
      <div>
        <Header className="h-[64px]" />
        <div className="h-[calc(100svh-64px)] overflow-y-scroll flex flex-col">
          <Main>
            <Routes>
              <Route path="/elements" element={<Elements />} />
              <Route path="/element/:id" element={<ElementPage />} />
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </Main>
          <Footer className="h-[64px]" />
        </div>
      </div>
    </Router>
  )
}
