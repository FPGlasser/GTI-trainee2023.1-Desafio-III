import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer, Navbar } from '../../Components'
import { Main } from '../../Components'

const Layout = () => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  )
}

export default Layout