import { useState } from 'react';
import { FormContainer, Label, Input, Button} from "./styles";

interface GetPlaylistProps {
    onPlaylistSearch: (url: string) => void;
}



const GetPlaylist: React.FC<GetPlaylistProps> = ({ onPlaylistSearch }) => {

  const [playlistUrl, setPlaylistUrl] = useState('');
  const [buttonText, setButtonText] = useState('Pesquisar Playlist');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const extractId = (url: string) => {
    const match = url.match(/list=([^&]+)/);
    return match ? match[1] : playlistUrl;
  }

  console.log(extractId(playlistUrl))

  const handleSavePlanet = async () => {
    try {
      setIsLoading(true);
      await onPlaylistSearch(extractId(playlistUrl));
      setPlaylistUrl('');
    } catch (error) {
      console.error('Erro ao pesquisar playlist:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormContainer>
      <Label>
        Link ou Id da playlist:
        <Input
          type="text"
          value={playlistUrl}
          onChange={(e) => setPlaylistUrl(e.target.value)}
        />
      </Label>
      <Button onClick={handleSavePlanet} disabled={isLoading}>
        {isLoading ? 'Carregando...' : buttonText}
      </Button>
    </FormContainer>
  );
};

export default GetPlaylist;