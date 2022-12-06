import { Route, Routes } from 'react-router-dom'
import { MainPage } from './pages/MainPage';
import { AboutPage } from './pages/AboutPage';
import { ShopPage } from './pages/ShopPage';
import { MorePage } from './pages/MorePage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/shop' element={<ShopPage />} />
        <Route path='/more' element={<MorePage />} />
      </Routes>
    </>
  )
}

export default App;
