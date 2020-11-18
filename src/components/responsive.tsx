import styled from "styled-components"

/**
 * This hides the element on desktop and displays it on smaller screens
 */
export const Small = styled.div`
  display: none;
  ${({ theme }) => theme?.media?.lg} {
    display: block;
  }
`
/**
 * This displays the element on desktop and hides it on smaller screens
 */
export const Large = styled.div`
  display: block;
  ${({ theme }) => theme?.media?.lg} {
    display: none;
  }
`

export const XLarge = styled.div`
  display: block;
  ${({ theme }) => theme?.media?.xl} {
    display: none;
  }
`
