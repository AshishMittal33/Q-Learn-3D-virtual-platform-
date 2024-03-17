import React from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'

const Layout = ({children}:{children:React.ReactNode}) => {
  return (
    <Component>
        <NavBar/>
        {children}
    </Component>
  )
}

const Component = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 2rem;
`

export default Layout
