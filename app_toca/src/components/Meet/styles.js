import styled from "styled-components";

export const Container = styled.div`
  height: 55px;
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const LeftDiv = styled.div`
  width: 66%;
  height: 100%;
  border-radius: 15px;
  border: 0.8px solid #012b40;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const RightDiv = styled.div`
  width: 27%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Text = styled.p`
  font-family: "Montserrat";
  font-size: 16px;
`;
