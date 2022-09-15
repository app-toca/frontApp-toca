import styled from "styled-components";

export const Container = styled.div`
  position: absolute;

  width: 90%;
  height: 80%;

  top: 5rem;

  background-color: #ffffff;

  border-radius: 1rem;
`;

export const AreaTitleDiv = styled.div`
  width: 100%;
  height: 13%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: 2rem;

    margin-left: 2.6rem;
    margin-right: 2.6rem;
  }
`;

export const MeetingInfoDiv = styled.div`
  width: 100%;
  height: 7%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  p {
    font-size: 1.5rem;
  }
`;

export const MeetingDivs = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Meeting = styled.div`
  width: 85%;
  height: 30%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  font-style: "Montserrat";

  p {
    height: 30%;
    width: 40%;
  }

  a {
    height: 30%;
    width: 20%;
  }
`;
