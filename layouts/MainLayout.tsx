import React, { ReactNode } from 'react'
import Nav from '../components/Navbar'

type Props = { children: ReactNode, contentStyle?: string }

const MyLayout = (props: Props) => {
  return (
    <>
      <Nav />
      <section>
        {props.children}
      </section>
    </>
  )
}

export default MyLayout