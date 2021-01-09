import styled from "styled-components"

export const AboutContainer = styled.section`
  display: flex;
  flex-flow: column;
  max-width: 800px;
  margin: 4rem auto;
  font-family: ${({ theme }) => theme?.fontFamily?.text};
`

export const Heading = styled.h3`
  font-family: ${({ theme }) => theme?.fontFamily?.heading};
  text-align: center;
  color: ${({ theme }) => theme?.colors?.primary};
  margin: 2.5rem 0;
  font-size: ${({ theme }) => theme?.fontSize?.custom(28)};

  ${({ theme }) => theme?.media?.md} {
    font-size: ${({ theme }) => theme?.fontSize?.custom(20)};
  }
`
export const Paragraph = styled.article`
  color: ${({ theme }) => theme?.colors?.hue};
  letter-spacing: 0.06rem;
  line-height: 15px;
  font-size: ${({ theme }) => theme?.fontSize?.custom(14)};
`
