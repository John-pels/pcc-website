import styled from "styled-components"

export const MarginalContainer = styled.div`
  padding: 1rem 7rem;

  ${({ theme }) => theme?.media?.md} {
    padding: 1rem;
  }
`

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 2rem;

  ${({ theme }) => theme?.media?.md} {
    flex-flow: column;
  }
`

export const PostCardColumn = styled.div`
  width: 24%;
  margin-bottom: 2rem;

  ${({ theme }) => theme?.media?.md} {
    width: 100%;
  }
`
