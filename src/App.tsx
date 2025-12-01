import { Route, Routes } from 'react-router-dom';
import { Login } from './pages/auth/login';
import { Register } from './pages/auth/register';
import { MainLayout } from './layout/main-layout';
import adminRoute from './router/admin-route';
import { Statistika } from './pages/admin/statistika/statistika';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='app' element={<MainLayout />} >
      
        <Route path="admin">
          <Route index element={<Statistika />} />
          {adminRoute.map(({ page: Page, path }) => (
            <Route key={path} path={path} element={<Page />} />
          ))}
        </Route>

      </Route>

    </Routes>
  )
}

export default App
