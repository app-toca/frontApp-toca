import styled, { keyframes } from "styled-components";

const iconAppearAnimation = keyframes`
0% {
  opacity: 0;
  scale: 1.3;
}

100%{
  opacity: 1;
  scale: 1;
}
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    179.85deg,
    #012b40 20.21%,
    rgba(1, 43, 64, 0) 99.87%
  );
`;
export const UpperDiv = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Img = styled.img`
  width: 250px;
  animation: 1.5s ${iconAppearAnimation};
  transition: 1s;
`;

export const InputErrorDiv = styled.div`
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const BottomDiv = styled.form`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
