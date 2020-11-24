import styled from "styled-components"

export const FlexContainer = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 4rem 0;
  font-family: ${({ theme }) => theme?.fontFamily?.normal};

  ${({ theme }) => theme?.media?.md} {
    flex-flow: column;
  }
`

export const Form = styled.form`
  display: flex;
  justify-content: flex-start;
  flex-flow: column;
  width: 50%;
  padding: 2rem;

  ${({ theme }) => theme?.media?.md} {
    padding: 0;
    margin: 2rem 0;
    width: 100%;
  }
`

export const ContactDetails = styled.div`
  display: inherit;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  padding: 2rem;

  ${({ theme }) => theme?.media?.md} {
    width: 100%;
    padding: 0;
  }
`

export const FormHeading = styled.h3`
  font-size: ${({ theme }) => theme?.fontSize?.custom(22)};
  text-align: center;
  padding: 1rem 0;
`

export const InputGroup = styled.div``

export const InputField = styled.input`
  padding: 0.7rem 1rem;
  width: 100%;
  outline: none;
  transition: 0.3s;
  margin: 1rem 0;
  border: ${({ theme }) => `2px solid ${theme?.colors?.hue}`};
  border-radius: 5px;

  &::placeholder {
    font-size: ${({ theme }) => theme?.fontSize?.small};
  }

  &:focus {
    border: ${({ theme }) => `2px solid ${theme?.colors?.primary}`};
  }
`

export const InputLabel = styled.label`
  color: ${({ theme }) => theme?.colors?.hue};
`

export const TextArea = styled.textarea`
  padding: 0.7rem 1rem 3rem 1rem;
  width: 100%;
  outline: none;
  transition: 0.3s;
  margin: 1rem 0;
  border: ${({ theme }) => `2px solid ${theme?.colors?.hue}`};
  border-radius: 5px;

  &::placeholder {
    font-size: ${({ theme }) => theme?.fontSize?.small};
  }

  &:focus {
    border: ${({ theme }) => `2px solid ${theme?.colors?.primary}`};
  }
`

export const SubmitButton = styled.button`
  width: 100%;
  border: none;
  padding: 1rem;
  border-radius: 5px;
  color: ${({ theme }) => theme?.colors?.white};
  outline: none;
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom left, ${theme?.colors?.primary}, ${theme?.colors?.purple})`};
  cursor: pointer;
  box-shadow: 0px 0px 5px 0px transparent;
  transition: 0.3s;
  &:hover {
    box-shadow: ${({ theme }) => `0px 0px 5px 0px ${theme?.colors?.hue}`};
  }
`
