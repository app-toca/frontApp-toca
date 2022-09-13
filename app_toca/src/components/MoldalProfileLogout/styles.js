import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 8vh;
  left: 28vw;
  width: 240px;
  height: 160px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border: 1px solid #b3b3b3;
  border-radius: 15px;
  box-shadow: 2px 4px 5px 1px rgba(0, 0, 0, 0.25);
`;

export const Button = styled.button`
  background-color: transparent;
  width: 100%;
  height: 50%;
  cursor: pointer;
  font-size: 35px;
  font-family: "CharcuterieBlockW05-Regular";
  border: 0;
`;
