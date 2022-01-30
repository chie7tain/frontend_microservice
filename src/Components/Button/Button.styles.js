import styled from "styled-components";

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const Button = styled.button`
  background-color: ${(props) => props.background || "purple"};
  color: ${(props) => props.color || "green"};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 1.2rem;
  width: 100%;
  cursor: pointer;
`;
