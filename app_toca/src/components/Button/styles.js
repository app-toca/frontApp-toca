import styled from "styled-components";

export const Button = styled.button`
  border: 0;
  border-radius: 15px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  font-family: "Montserrat";
  background-color: #012b40;
  color: white;

  :hover {
    scale: 1.05;
    transition: .3s;
    filter: brightness(1.5);

    cursor: pointer;
  }
`;

export const ButtonSecondary = styled.button`
  border: 2px solid #012b40;
  border-radius: 15px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: ${(props) => props.fontSize};
  font-family: "Montserrat";
  font-weight: 400;
  background-color: transparent;
  color: #012b40;

  :hover {
    cursor: pointer;
  }
`;
