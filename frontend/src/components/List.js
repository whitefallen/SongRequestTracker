import React from "react";

function List({songs}) {
  return (
    <div className={"mx-auto p-2"}>
      <div className="flex basis-full justify-evenly">
        <div className="basis-1/5">ID</div>
        <div className="basis-1/5">SongName</div>
        <div className="basis-1/5">BsrId</div>
        <div className="basis-1/5">RequestedBy</div>
        <div className="basis-1/5">Actions</div>
      </div>
      <div className="py-4">
        <div className="w-full border-t border-gray-300"></div>
      </div>
      {songs.map((song, index) => {
        return <div className="flex basis-full justify-evenly" key={song.id}>
            <div className="basis-1/5">{song.id}</div>
            <div className="basis-1/5">{song.songName}</div>
            <div className="basis-1/5">{song.bsrId}</div>
            <div className="basis-1/5">{song.requestedBy}</div>
            <div className="basis-1/5">X</div>
          </div>
          
      })}
    </div>
  );
}
export default List;