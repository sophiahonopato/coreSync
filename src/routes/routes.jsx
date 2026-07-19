import { Route, Routes } from "react-router-dom"
import Home from "../home"
import Blog from "../pages/blog"
import News from "../pages/news"
import Perguntas from "../pages/perguntasRecentes"


const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/news" element={<News />} />
      <Route path="/perguntas" element={<Perguntas />} />
    </Routes>
  )
}

export default RoutesApp