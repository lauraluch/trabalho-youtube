import { useState } from 'react';
import { FormContainer, Label, Input, Button} from "./styles";

interface GetPlaylistProps {
    onPlaylistSearch: (playlistId: string) => void;
}

const GetPlaylist: React.FC<GetPlaylistProps> = ({ onPlaylistSearch }) => {

  const [playlistId, setPlaylistId] = useState('');
  const [buttonText, setButtonText] = useState('Pesquisar Playlist');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSavePlanet = async () => {
    try {
      setIsLoading(true);
      await onPlaylistSearch(playlistId);
      setPlaylistId('');
    } catch (error) {
      console.error('Erro ao pesquisar playlist:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormContainer>
      <Label>
        Id da playlist:
        <Input
          type="text"
          value={playlistId}
          onChange={(e) => setPlaylistId(e.target.value)}
        />
      </Label>
      <Button onClick={handleSavePlanet} disabled={isLoading}>
        {isLoading ? 'Carregando...' : buttonText}
      </Button>
    </FormContainer>
  );
};

export default GetPlaylist;