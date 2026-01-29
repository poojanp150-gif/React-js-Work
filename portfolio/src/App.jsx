import { Route, Routes } from 'react-router-dom'
import Home from './Component/Home'
import Projects from './Component/Projects'
import "./PortfolioStyle.css"
// import Xyz from './Component/Xyz'
function App() {


  return (
    <>
     <Home/>
    {/* <Xyz/> */}
{/* <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Projects" element={<Projects />} />
</Routes> */}
     {/* <Projects/> */}
    </>
  )
}

export default App
