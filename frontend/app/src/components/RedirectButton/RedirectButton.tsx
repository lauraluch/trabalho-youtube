import { FC } from 'react';

interface ButtonProps {
    url: string;
  }
  

const RedirectButton: FC<ButtonProps> = ({ url }) => {

  const redirectToUrl = () => {
    
    // Open the URL in a new tab
    window.open(url, '_blank');
  }

return (
    <button onClick={redirectToUrl}>
        Assistir
    </button>
);
  
}

export default RedirectButton;
