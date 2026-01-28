import { BrowserRouter, Route, Routes } from 'react-router-dom'
import IndexPages from './pages/index/index'
import MouseProduct from './pages/view_product/mouse'
import KeyboardProduct from './pages/view_product/keyboard'
import SupportProduct from './pages/view_product/support'

import PadMouseProduct from './pages/view_product/padMouse'
import GuiaProduct from './pages/view_product/guiaEstiramiento'

import KitProduct from './pages/view_product/kit'
import ViewServices from './pages/view_servicios/viewServicios'
import ViewSobreMi from './pages/view_sobre_mi/viewSobreMi'

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
          <Route path='/GuiaProduct' element={<GuiaProduct/>}></Route>
          <Route path='/PadMouseProduct' element={<PadMouseProduct/>}></Route>
          <Route path='/KitProduct' element={<KitProduct/>}></Route>
          <Route path='/ViewServices' element={<ViewServices/>}></Route>
          <Route path='/ViewSobreMi' element={<ViewSobreMi/>}></Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
