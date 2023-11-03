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
      <div className="flex flex-col min-h-screen">
        <Header />
        <Main>
          <Routes>
            <Route path="/elements" element={<Elements />} />
            <Route path="/element/:id" element={<ElementPage />} />
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Main>
        <Footer />
      </div>
    </Router>
  )
}
