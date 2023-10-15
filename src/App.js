import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Nav from "./components/Nav"

import Home from "./pages/Home"
import Elements from "./pages/Elements"
import ElementPage from "./pages/ElementPage"

export default function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/elements" element={<Elements />} />
        <Route path="/element/:id" element={<ElementPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}
