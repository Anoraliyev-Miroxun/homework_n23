import { useState } from 'react'
import {Routes,Route} from 'react-router-dom';
import { MainLayout } from './layout/main-layout';
import { Home } from './pages/home';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        
      </Route>
    </Routes>
    </>
  )
}

export default App
