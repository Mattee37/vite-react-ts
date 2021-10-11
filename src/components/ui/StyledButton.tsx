import styled from '@emotion/styled';

const StyledButton = styled.button`
  grid-column: span 3;
  width: 31.6%;
  align-self: center;
  justify-self: center;
  background: rgb(5, 36, 214);
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 3px;
  margin-top: 10px;
  padding: 10px;
  transition: 0.3s ease all;

  &:hover {
    background: rgb(0, 18, 119);
  }
`;

export default StyledButton;
