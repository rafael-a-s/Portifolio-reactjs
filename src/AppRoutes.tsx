import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Car } from './pages/Car'
import { Catalog } from './pages/Catalog'

export function AppRoutes(){
  return(
  <Router>
    <Routes>
      <Route path="/car" element={<Car/>}></Route>
      <Route path="/catalog" element={<Catalog/>}></Route>

    </Routes>


  </Router>
  )
}