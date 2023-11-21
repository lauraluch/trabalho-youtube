import { FC, Key } from 'react';
import Card from '../Card/Card';

interface CardsListProps {
  playlistData?: any[];
}

const CardsList: FC<CardsListProps> = ({ playlistData }) => {
  // console.log(playlistData)
  if (playlistData == undefined) {
    return (<></>)
  }
  return (
    <div>
      {playlistData.map((item: { id: Key | null | undefined; snippet: { title: string; thumbnails: { medium: { url: string; }; }; resourceId: { videoId: any; }; }; }) => (
        <Card
          key={item.id}
          title={item.snippet.title}
          imageUrl={item.snippet.thumbnails.medium.url}
          link={`https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`}
        />
      ))}
    </div>
  );
};

export default CardsList;