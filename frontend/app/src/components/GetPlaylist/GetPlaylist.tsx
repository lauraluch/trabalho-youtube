import { useState } from 'react';
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
    <div>
      <label>
        Id da playlist:
        <input
          type="text"
          value={playlistId}
          onChange={(e) => setPlaylistId(e.target.value)}
        />
      </label>
      <button onClick={handleSavePlanet} disabled={isLoading}>
        {isLoading ? 'Carregando...' : buttonText}
      </button>
    </div>
  );
};

export default GetPlaylist;