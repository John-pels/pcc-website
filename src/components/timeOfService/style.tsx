import styled from "styled-components"

export const TimeOfServiceContainer = styled.section`
  font-family: ${({ theme }) => theme?.fontFamily?.text};
`
export const ServiceHeading = styled.h1`
  font-family: ${({ theme }) => theme?.fontFamily?.heading};
  text-align: center;
  margin-bottom: 2rem;
  ${({ theme }) => theme?.media.md} {
    font-size: ${({ theme }) => theme?.fontSize?.custom(18)};
  }
`

export const Table = styled.table`
  /* padding: 1rem; */
  width: 100%;

  ${({ theme }) => theme?.media.md} {
    padding: 0;
  }
`

export const TableHead = styled.thead`
  font-weight: 600;
  line-height: 2;
`

export const TableRow = styled.tr`
  font-size: ${({ theme }) => theme?.fontSize?.custom(13)};
  line-height: 2;

  ${({ theme }) => theme?.media.md} {
    font-size: ${({ theme }) => theme?.fontSize?.custom(11)};
  }
`

export const TableData = styled.td`
  &:first-child {
    width: 30%;
  }
  &:nth-child(2) {
    width: 40%;
  }
`
export const TableBody = styled.tbody``
