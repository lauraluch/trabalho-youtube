import styled from 'styled-components'

export const FormContainer = styled.div`
  margin-top: 40px;
  justify-content: center;
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 16px;
  color: #333;
`;

export const Input = styled.input`
  margin-left: 20px;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const Button = styled.button`
  margin-left: 20px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: rgb(50,180,40);
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(70,220,70);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;