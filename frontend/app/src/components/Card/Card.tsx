import { FC } from 'react';
import RedirectButton from '../RedirectButton/RedirectButton';

interface CardProps {
  title: string;
  imageUrl: string;
  link: string;
}

const Card: FC<CardProps> = ({ title, imageUrl, link}) => {


  return (
    <div>
      <h2>{title}</h2>
      <img src={imageUrl} alt='Thumbnail'/>
      <RedirectButton url={link}/>
    </div>
  );
};

export default Card;