import { BrowserRouter, Routes, Route } from 'react-router'

import { Home } from '../pages/Home'
import { Products } from '../pages/Products'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='products' element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}
