import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Layoutdiv = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  main {
    display: grid;
    grid-template-columns: auto auto;
  }
`

function Layout(props) {
  const { title, children } = props

  return (
    <Layoutdiv>
      <header>
        <h1>
          <Link to={`/`}>{title}</Link>
        </h1>
      </header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Layoutdiv>
  )
}

export default Layout
