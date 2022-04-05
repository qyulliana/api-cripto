import styled from "styled-components";

export const InputSubmit = styled.input`
  border: none;
  width: 20%;
  background-color: #878bff;
  padding: 10px;
  color: white;
  display: block;
  &:hover {
    background-color: purple;
    cursor: pointer;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;