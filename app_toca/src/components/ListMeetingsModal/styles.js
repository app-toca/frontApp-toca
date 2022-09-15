import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  width: 90%;
  height: 80%;
  top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 1rem;
`;

export const Centered = styled.div`
  width: 92%;
  height: 92%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const TitleDiv = styled.div`
  height: 10%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const LeftTitleDiv = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const RightTitleDiv = styled.div`
  width: 10%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export const BottomDiv = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
`;

export const Title = styled.p`
  font-family: "CharcuterieBlockW05-Regular";
  font-size: 30px;
  color: black;
  font-weight: 500;
`;

export const Bottom = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
