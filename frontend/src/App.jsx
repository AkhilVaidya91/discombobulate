import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import CreateTrip from './pages/CreateTrip'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Hero from './components/custom/Hero'
import ExamScoreCalculator from './pages/calculateMarks'
import Header from './components/custom/Header'
import { Toaster } from 'sonner'
import ViewTrip from './viewTrip/[id]'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Header/>
    <Toaster/>
    <Routes>
      <Route path="/" element={<Hero/>}/>
      
      <Route path="/createtrip" element={<CreateTrip/>}/>
      <Route path="/calculate" element={<ExamScoreCalculator/>}/>
      <Route path="/viewTrip/:id" element={<ViewTrip/>}/>

      
    </Routes>
    </BrowserRouter>
  )
}

export default App
