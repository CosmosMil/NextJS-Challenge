import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-start ml-9 my-3 '>
      <Link className='p-1 rounded hover:bg-green-300  text-cyan-600' href='/'>HOME</Link >

    </div>
  )
}

export default Navbar