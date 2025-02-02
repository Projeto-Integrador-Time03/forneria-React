import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import ListaCategorias from './components/categoria/listacategorias/ListaCategorias'
import DeletarCategoria from './components/categoria/deletarcategoria/DeletarCategoria'
import FormCategoria from './components/categoria/formcategoria/FormCategoria'
import Perfil from './pages/perfil/Perfil'
import Login from './pages/login/Login'


function App() {
  return (
    <>
        <BrowserRouter>
            <Navbar />
          <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastrarcategoria" element={<FormCategoria />} />
              <Route path="/editarcategoria/:id" element={<FormCategoria />} />
              <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
              {/*<Route path="/cardapio" element={<ListaPizzas />} />*/}
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App