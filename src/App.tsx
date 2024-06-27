import {Routes,Route} from "react-router-dom";
import './index.css';
import './App.css';
// import MainPage from './pages/MainPage';
import AboutMe from "./pages/AboutMe";
import SkillPage from "./pages/SkillPage";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import ListPage from "./pages/ListPage";


function App() {

  return (
    <Routes>
      <Route path="/" element={<ListPage />} />
      <Route path="/about" element={<AboutMe/>}/>
      <Route path="/skill" element={<SkillPage/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/contact" element={<ContactMe/>}/>

    </Routes>
  )
}

export default App
