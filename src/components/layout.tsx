import { ThemeProvider } from "styled-components"
import React, { ReactNode } from "react"
import Footer from "./footer"
import SEO from "./seo"
import theme from "../theme"
import { GlobalStyles } from "../theme/globalStyles"
import Navbar from "./navbar"
import { MarginalContainer } from "./container"

interface layouttype {
  title: string
  children: ReactNode
  location?: string
}

const Layout = ({ title, children, location }: layouttype) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SEO title={title} />
      <Navbar location={location} />
      <MarginalContainer>
        <main>{children}</main>
      </MarginalContainer>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
