import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 600px;
  justify-content: center;
  align-items: center;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 500px;
  padding: 16px;

  input,
  button {
    height: 40px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }
  button {
    cursor: pointer;
  }
`;
