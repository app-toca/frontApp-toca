import styled from "styled-components";

export const Container = styled.div`
  position: absolute;

  width: 90%;
  height: 80%;

  top: 5rem;

  background-color: #ffffff;

  border-radius: 1rem;

  font-family: "Montserrat";
`;

export const CreateMeetingForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  gap: 0.5rem;

  label {
    font-family: "Montserrat";
  }

  .description_input {
    width: 80%;
    height: 10rem;

    border-radius: 0.4rem;
    border: .09rem solid black;

    font-size: 1rem;

  }

  input {
    width: 80%;
    height: 3rem;

    border-radius: 0.4rem;
    border: .09rem solid black;

    font-size: 2rem;
  }
`;
