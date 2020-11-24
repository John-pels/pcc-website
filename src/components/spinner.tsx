import styled, { keyframes } from "styled-components"

export const Animation = keyframes`
 0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

`

export const Spinner = styled.div`
  display: inline-block;
  border: 2px solid #fff;
  border-left-color: #7983ff;
  border-radius: 150%;
  width: 30px;
  height: 30px;
  animation: Animation 1s ease-in-out infinite;
`
