import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { useEffect } from 'react'

function trackList( name,artist,album,id ) {
const [name, setName] = useState(name);
const [artist, setArtist] = useState(artist);
const [album, setAlbum] = useState(album);
const [id, setId] = useState(id);
}