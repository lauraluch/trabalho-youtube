import { FC } from 'react';
import { StyledButton } from "./styles";

interface ButtonProps {
    url: string;
  }
  

const RedirectButton: FC<ButtonProps> = ({ url }) => {

  const redirectToUrl = () => {
    
    // Open the URL in a new tab
    window.open(url, '_blank');
  }

return (
    <StyledButton onClick={redirectToUrl}>
        Assistir ▶
    </StyledButton>
);
  
}

export default RedirectButton;
