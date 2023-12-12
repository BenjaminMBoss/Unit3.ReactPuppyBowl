import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import axios from 'axios'
import { Routes, Route, useNavigate } from 'react-router-dom'
import AllPlayers from './components/AllPlayers'
import HomePage from './components/HomePage'
import SinglePlayer from './components/SinglePlayer'
import AddPlayer from './components/AddPlayer'

function App() {
  const [players,setPlayers] = useState([])
  const navigate = useNavigate();

  useEffect(() => {
    const getPlayers = async () => {
      const {data} = await axios.get("https://fsa-puppy-bowl.herokuapp.com/api/2310/players")
      setPlayers(data.data.players)
    }
    getPlayers();
  }, [])

  const addPuppy = async (newPuppy) => {
    const {data} = await axios.post("https://fsa-puppy-bowl.herokuapp.com/api/2310/players", newPuppy)
    setPlayers([...players,data.data.newPlayer])
    navigate('/players')
  }

  const deletePuppy = async (puppy) => {
    await axios.delete(`https://fsa-puppy-bowl.herokuapp.com/api/2310/players/${puppy.id}`)
    setPlayers(players.filter((pups) => {return pups.id !== puppy.id}))
    navigate('/players')
  }

  
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/players' element={<AllPlayers players={players}/>}/>
        <Route path='/players/:id' element={<SinglePlayer players={players} deletePuppy={deletePuppy}/>}/>
        <Route path='/addplayer' element={<AddPlayer addPuppy={addPuppy}/>}/>
      </Routes>
    </div>
      
  )
}

export default App
