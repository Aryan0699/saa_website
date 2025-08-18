import { useState } from 'react'
import Background from './components/BackgroundLines'
import Navbar from './components/Header'
import Initiatives from "./components/Initiatives";
import VisitIITJ from "./components/VisitIITJ";
import ASMP from "./components/ASMP";
import Legacy from "./components/Legacy";
import RoomateRewind from './components/RoomateRewind';
import Farewell from './components/Farewell';
import Convocation from './components/Convocation';
import Dashak from './components/Dashak';
import AlumniInduction from './components/AlumniInduction';
import AlumniSessions from './components/AlumniSessions';
import CrackTheCall from './components/CrackTheCall';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1 className='bg-red-700 text-3xl font-bold underline text-'>HEllo</h1>
      <Background/>
      <Navbar/>
    </div>
  )
}

export default App
