import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { useEffect } from 'react'

function TrackList( name,artist,album,id ) {
const [name, setName] = useState(name);
const [artist, setArtist] = useState(artist);
const [album, setAlbum] = useState(album);
const [id, setId] = useState(id);
const data = [
    {
        name: "Kendrick Lamar",
        artist: "Kendrick Lamar",
        album: "DAMN.",
        id: "1"
    },

    {
        name: "Marvins Room",
        artist: "Drake",
        album: "Take Care",
        id: "2"
    },

    {
        name: "Man in the mirror",
        artist: "Dave East",
        album: "Karma 4",
        id: "3"
    },

    {
        name: "I know",
        artist: "Big Sean",
        album: "Dark Sky Paradise",
        id: "4"
    },
    {
        name: "Codine Crazy",
        artist: "fUTURE",
        album: "DS2",
        id: "5"
    },

    {
        name: "Crazy Story",
        artist: "King Von",
        album: "Welcome to O'Block",
        id: "6"
    },
];
return (
   <>
   {tracks.map((track) => (
        <Track
          key={track.id}
          track={track}
        />
      ))}
   </>    
)
}

export default TrackList;