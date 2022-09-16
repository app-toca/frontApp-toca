import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(
    179.85deg,
    #012b40 20.21%,
    rgba(1, 43, 64, 0) 99.87%
  );
`;
export const MiddleDiv = styled.div`
  height: 84%;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: center;

  overflow-y: auto;
`;
export const InnerMiddle = styled.div`
  height: max-content;
  width: 100%;
  padding-top: 365%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 0.5rem;
  overflow-y: auto;
`;
