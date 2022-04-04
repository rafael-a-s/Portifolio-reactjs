import { NavBar } from "./components/pages/layout/NavBar";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './components/style/App.css'
import Home from "./components/pages/Home";



function App() {
    return (
      <Router>
        <NavBar/>
        <div className="container">
          <Routes>
          
            <Route path="/" element={<Home/>}/>
          
          </Routes>
          </div>
      </Router>
      

      
      
     );
}
export default App
