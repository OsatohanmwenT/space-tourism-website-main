import Layout from "./components/Layout"
import Home from "./pages/Home"
import Destination from "./pages/Destination"
import Crew from "./pages/Crew"
import Technology from "./pages/Technology"
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="destination" element={<Destination />}/>
          <Route path="crew" element={<Crew />}/>
          <Route path="technology" element={<Technology />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}