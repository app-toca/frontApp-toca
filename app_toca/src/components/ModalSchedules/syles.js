import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 8vh;
  left: 5vw;
  height: 50vh;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 0px 50px 10px rgba(0, 0, 0, 0.25);
`;

export const Centered = styled.div`
  height: 90%;
  width: 90%;
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  height: 100%;
  width: 12.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Celula = styled.div`
  width: 100%;
  height: 6.25%;
  border: black solid 1px;
  background-color: ${(props) =>
    props.isSchedule ? `rgba(0, 0, 255, ${props?.colorValue})` : "white"};
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
`;
