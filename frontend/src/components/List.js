import React from "react";

function List({songs}) {
  return (
    songs.map((song, index) => {
      return <div key={song.id}>{song.songName}</div>
    })
  );
}
export default List;