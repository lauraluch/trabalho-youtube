import './App.css';
import axios from 'axios';
import GetPlaylist from './components/GetPlaylist/GetPlaylist';
import { useState } from 'react';
import CardsList from './components/ListCards/CardsList';
import { json } from 'stream/consumers';


function App() {

  const [playlistData, setPlaylistData] = useState()

  const handlePlaylistSearch = async (id: string) => {
    try {
      const response = await axios.get(`http://localhost:3005/playlist/${id}`);
      
      if (response.data.message != 'Erro ao obter informações da playlist.') {
        setPlaylistData(response.data.items)
        console.log(playlistData)
      } else {
        alert('Erro ao obter informações da playlist');
        setPlaylistData(undefined)
      }
    } catch (error) {
      console.error('Erro na requisição POST:', error);
      setPlaylistData(undefined)
      alert('Erro na requisição POST!');
    }
  };

  return (
    <div>
      <GetPlaylist onPlaylistSearch={handlePlaylistSearch}/>
      {playlistData ?
        <CardsList playlistData={playlistData}/> :
        <></>}
    </div>
  );
}

export default App;