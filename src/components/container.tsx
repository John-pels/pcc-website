import styled from "styled-components"

export const MarginalContainer = styled.div`
  padding: 1rem 5rem;
  ${({ theme }) => theme?.media?.md} {
    padding: 1rem;
  }
`

export const Flex = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;

  width: 100%;

  ${({ theme }) => theme?.media?.md} {
    flex-flow: column;
  }
`

export const PostCardColumnExternal = styled.div`
  width: 25%;
  padding: 0 13px;

  margin-bottom: 2rem;

  ${({ theme }) => theme?.media?.md} {
    width: 100%;
    padding: 0;
  }
`

export const PostCardColumn = styled.div`
  width: 100%;

  ${({ theme }) => theme?.media?.md} {
    width: 100%;
  }
`

export const SectionTitle = styled.h2`
  margin: 2rem 0;
  font-family: ${({ theme }) => theme?.fontFamily?.normal};
  color: ${({ theme }) => theme?.colors?.hue};
  font-size: ${({ theme }) => theme?.fontSize?.custom(19)};

  padding: 0 13px;

  ${({ theme }) => theme?.media?.md} {
    padding: 0;
  }
`
