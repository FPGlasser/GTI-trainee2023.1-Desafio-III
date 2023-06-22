import React, {useEffect} from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar, Main, Footer, ScrollTop } from '../../Components'

const Layout = () => {
  const location = useLocation()
  useEffect(ScrollTop, [location])
  
  return (
    <React.Fragment>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </React.Fragment>
  )
}

export default Layout