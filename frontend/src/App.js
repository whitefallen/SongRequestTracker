import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import List from './components/List';
import axios from 'axios';
import Header from 'components/Header';

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8066/api/songs').then(res => {
      const songList = res.data;
      setSongs(songList);
    })
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <List songs={songs}/>
    </div>
  );
}

export default App;
