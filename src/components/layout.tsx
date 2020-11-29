import { ThemeProvider } from "styled-components"
import React, { ReactNode } from "react"
import Footer from "./footer"
import SEO from "./seo"
import theme from "../theme"
import { GlobalStyles } from "../theme/globalStyles"
import Navbar from "./navbar"
import { MarginalContainer } from "./container"
import { SnackbarProvider } from "notistack"
import ScrollToTop from "./scrollToTop"

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
      <SnackbarProvider
        maxSnack={1}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Navbar location={location} />
        <MarginalContainer>
          <main>{children}</main>
        </MarginalContainer>
        <ScrollToTop location={location} />
        <Footer />
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default Layout
