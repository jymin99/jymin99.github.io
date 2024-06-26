import {Routes,Route} from "react-router-dom";
import './index.css'
import './App.css';
import MainPage from './pages/MainPage'


function App() {

  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  )
}

export default App
