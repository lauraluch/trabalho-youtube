import axios from 'axios';
import GetPlaylist from './components/GetPlaylist/GetPlaylist';
import { useState } from 'react';
import CardsList from './components/CardsList/CardsList';
import { Container, Description, TitleContainer } from "./styles";

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
    <Container>
      <TitleContainer>
        <h1>Playlists do</h1>

        <img style={{
          height: '4rem'
        }} draggable={'false'} src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/502px-Logo_of_YouTube_%282015-2017%29.svg.png'/>
      </TitleContainer>

      <Description>Acesse os itens da playlist que desejar abaixo:</Description>
      
      <GetPlaylist onPlaylistSearch={handlePlaylistSearch}/>
      {playlistData ?
        <CardsList playlistData={playlistData}/> :
        <></>}
    </Container>
  );
}

export default App;