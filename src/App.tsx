import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Categories from "./pages/Categories"
import PlantDetail from "./pages/PlantDetail"

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/categories/:category" element={<Categories/>}/>
          <Route path="/categories/:category/:id" element={<PlantDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
