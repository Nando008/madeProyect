import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexPages from './pages/index/index'
import MouseProduct from './pages/view_product/mouse'
import KeyboardProduct from './pages/view_product/keyboard'
import SupportProduct from './pages/view_product/support'
import KitProduct from './pages/view_product/kit'
import ViewServices from './pages/view_servicios/viewServicios'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* INICIO */}
          <Route path='/' element={<IndexPages/>}></Route>

          {/* Viesta de cada producto */}
          <Route path='/MouseProduct' element={<MouseProduct/>}></Route>
          <Route path='/KeyboardProduct' element={<KeyboardProduct/>}></Route>
          <Route path='/SupportProduct' element={<SupportProduct/>}></Route>
          <Route path='/KitProduct' element={<KitProduct/>}></Route>
          <Route path='/ViewServices' element={<ViewServices/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
