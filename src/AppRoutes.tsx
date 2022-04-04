import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Home from './components/pages/Home'
import { Container } from './components/pages/layout/Container'

export function AppRoutes(){
  return(

  <Router>
    
    <Routes>
      <Container>
        <Route path="/home"  element={<Home/>}></Route>
      
      </Container>
    </Routes>
  </Router>

  )
}