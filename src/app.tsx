import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'

// Import pages
import RootLayout from './routes/__root'
import Home from './routes/index'
import Contato from './routes/contato'
import SiloIlhaGrande from './routes/siloses/travessia-ilha-grande'
import SobreNos from './routes/sobre'
import Galeria from './routes/galeria'
import Blog from './routes/blog'

const root = document.getElementById('root')!
createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="contato" element={<Contato />} />
        <Route path="sobre" element={<SobreNos />} />
        <Route path="galeria" element={<Galeria />} />
        <Route path="blog" element={<Blog />} />
        <Route path="siloses/travessia-ilha-grande" element={<SiloIlhaGrande />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
