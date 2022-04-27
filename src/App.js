import './App.css'
import Header from './components/header/Header';
import HomePage from './components/HomePage/HomePage';
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [feed, setFeed] = useState()
  // const [title, setTitle] = useState()
  let title;
  const getFeed = async () => {
      try {
          const res = await axios.get('https://free-football-soccer-videos.p.rapidapi.com/', {
            headers: {
              'X-RapidAPI-Host': 'free-football-soccer-videos.p.rapidapi.com',
              'X-RapidAPI-Key': 'cd70deb726msh5da57583305a4a0p138b03jsnfae7a783bd44'
            }
          })
          const output = await res.data
          console.log(output);
          setFeed(output) 
      } catch (err) {
            console.log(err);
      }
  }

useEffect(() => {
  const getting = getFeed()

  return () => {
    getting()
  }
}, []) 

  return (
    <div className="App">
      <Header/>
     <HomePage feed={feed} title={title}/>
    </div>
  );
}

export default App;
