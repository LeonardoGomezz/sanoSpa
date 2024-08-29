import React from 'react'
import { Nav } from '../Nav'

export const Main = ({ children }: { children: React.ReactNode }) =>{
  return(
    <>
      <Nav/>
      <main>{children}</main>
    </>
  )
}