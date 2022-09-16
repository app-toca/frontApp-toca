import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 8vh;
  left: 5vw;
  height: 83vh;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 0px 50px 10px rgba(0, 0, 0, 0.25);
`;

export const CenteredDiv = styled.form`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Div1 = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Div11 = styled.div`
  height: 50%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Div12 = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 100%;
`;

export const Div2 = styled.div`
  width: 100%;
  height: 13%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const Div21 = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
`;
export const Div22 = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Div3 = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  align-items: center;
`;
export const Div4 = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Div5 = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  align-items: center;
`;
export const Div6 = styled.div`
  width: 100%;
  height: 17%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Text1 = styled.p`
  font-family: "Montserrat";
  font-size: 17px;
  color: black;
`;

export const Input = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-family: "Montserrat";
  border-radius: 8px;
  background-color: white;
  border: 1px solid #012b40;
  font-size: 15px;
  padding-left: 10px;
  :focus {
    outline: 0;
    box-shadow: 0 0 0 0;
    background-color: white;
  }
  ::placeholder {
    color: black;
  }
`;
export const Text2 = styled.p`
  font-family: "Montserrat";
  font-size: 15;
  margin-right: 15px;
  color: black;
`;

export const TextArea = styled.textarea`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-family: "Montserrat";
  border-radius: 8px;
  background-color: white;
  flex-wrap: wrap;
  border: 1px solid #012b40;
  font-size: 15px;
  padding-left: 10px;
  :focus {
    outline: 0;
    box-shadow: 0 0 0 0;
    background-color: white;
  }
  ::placeholder {
    color: black;
  }
`;
