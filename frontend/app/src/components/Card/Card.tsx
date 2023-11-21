import { FC } from 'react';
import RedirectButton from '../RedirectButton/RedirectButton';
import { Image, Title, CardContainer } from "./styles";

interface CardProps {
  title: string;
  imageUrl: string;
  link: string;
}

const Card: FC<CardProps> = ({ title, imageUrl, link}) => {


  return (
    <CardContainer>
      <Title>{title}</Title>
      <Image src={imageUrl} alt='Thumbnail'/>
      <RedirectButton url={link}/>
    </CardContainer>
  );
};

export default Card;