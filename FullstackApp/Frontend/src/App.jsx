import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
      axios.get('/api/jokes')
      .then((response)=>{
        setJokes(response.data)
      })
      .catch((error) =>{
        console.log(error)
      })
  })

  return (
    <div>
      <h1>Basic Fullstack App | local machine </h1>
      <h3>Jokes : {jokes.length}</h3>
      <div>
      {
        jokes.map((joke, index) => {
            return (
                  <div key={joke.id}>
                  <h3>{joke.title}</h3>
                  <p>{joke.description}</p>
                  </div>
            );
       })
      }
      </div>
      
    </div>
  )
}

export default App
