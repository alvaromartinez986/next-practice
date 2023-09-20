import Navbar from '@components/Navbar/Navbar'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="container">
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
