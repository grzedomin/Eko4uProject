import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
 
  z-index: 1000;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  border-bottom: 1px solid #dee2e6;
`;

export const FormWrapper = styled.form`
padding: 1rem;
justify-content: flex-start;
`;

export const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  border: none;
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 320px;
  width: 100%;
`;

export const Title = styled.span`
  max-width: 160px;
  width: 100%;
`;

export const Input = styled.input`
  border-radius: 3px;
  border: 1px solid #485665;
  width: 100%;
  padding: 3px;
`;

export const Button = styled.button`
  min-height: 30px;
  min-width: 30px;
  border: none;
  transition: 0.2s;
  font-size: 16px;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
  &:active {
    transform: scale(110%);
    transition: 0.1s;
  }
  ${({ save }) =>
    save &&
    css`
      background-color: #f5a822;

      &:hover {
        background-color: #d99e36;
      }
    `}
  ${({ cancel }) =>
    cancel &&
    css`
      background-color: #f13520;
      background-position: center;
      background-repeat: no-repeat;
      background-size: 60%;
      &:hover {
        background-color: #be3f31;
      }
    `}
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 25px;
`;
