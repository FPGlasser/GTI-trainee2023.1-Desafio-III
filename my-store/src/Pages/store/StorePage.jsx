import React from 'react'
import { Outlet } from 'react-router-dom'

const StorePage = () => (
  <div>
    <p>Store</p>
    <Outlet />
  </div>
)

export default StorePage