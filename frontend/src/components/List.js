import React, { useEffect } from "react";
import { useState } from 'react';
import './../styles/List.css';
import { ImBin } from "react-icons/im";
import axios from 'axios';

function List() {
  const [songs, setSongs] = useState([]);
  const backendAPI = process.env.REACT_APP_BACKENDAPI;
  
  useEffect(() => {
    axios.get(backendAPI).then(res => {
      const songList = res.data;
      setSongs(songList);
    })
  }, []);

  const deleteSong = (removedSong) => {
    if(removedSong) {
      axios.delete(`${backendAPI}/${removedSong.id}`).then(res => {
        if(res.status === 200) {
          let newList = songs.filter(song => song.id !== removedSong.id);
          setSongs(newList);
        }
      })
    }
  }

  return (
    <div className={"mx-auto p-2"}>
      <div className="flex basis-full justify-evenly">
        <div className="flex-basis-5">ID</div>
        <div className="flex-basis-10">BsrId</div>
        <div className="flex-basis-30">SongName</div>
        <div className="flex-basis-20">Channel</div>
        <div className="flex-basis-20">RequestedBy</div>
        <div className="flex-basis-5">Actions</div>
      </div>
      <div className="py-4">
        <div className="w-full border-t border-gray-300"></div>
      </div>
      {songs.map((song) => {
        return <div className="flex basis-full justify-evenly" key={song.id}>
            <div className="flex-basis-5">{song.id}</div>
            <div className="flex-basis-10">{song.bsrId}</div>
            <div className="flex-basis-30">{song.songName}</div>
            <div className="flex-basis-20">{song.channel}</div>
            <div className="flex-basis-20">{song.requestedBy}</div>
            <div className="flex-basis-5"><ImBin onClick={()=> {
              deleteSong(song)
            }}/></div>
          </div>
          
      })}
    </div>
  );
}
export default List;