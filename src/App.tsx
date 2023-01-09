import { Link, Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/MainPage';
import { AboutPage } from './pages/AboutPage';
import { ShopPage } from './pages/ShopPage';
import { MorePage } from './pages/MorePage';
import { ProductPage } from './pages/ProductPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/more' element={<MorePage />} />
        <Route path='*' element={<div className='not_found'>Page not found <br /> <Link to='/'>Go back</Link></div>} />
      </Routes>
    </>
  )
}

export default App;
