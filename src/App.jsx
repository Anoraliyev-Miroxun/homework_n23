import { useState } from 'react'
import {Routes,Route} from 'react-router-dom';
import { MainLayout } from './layout/main-layout';
import { Home } from './pages/home';
import { About } from './pages/about';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
    </>
  )
}

export default App
