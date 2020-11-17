import { ThemeProvider } from "styled-components"
import React, { ReactNode } from "react"
import Footer from "./footer"
import SEO from "./seo"
import theme from "../theme"
import { GlobalStyles } from "../theme/globalStyles"

interface layouttype {
  title: string
  children: ReactNode
}

const Layout = ({ title, children }: layouttype) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <SEO title={title} />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
