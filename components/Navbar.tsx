import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'

const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;


  return (
    <nav>
      <div className='flex justify-start ml-9 my-3 '>
        {pathname === '/' ? (
          <Link className='p-1 rounded hover:bg-green-300  text-cyan-600' href='/characters'>CHARACTERS</Link >
        ) : (
          <>
            {pathname === '/characters' ? (
              <Link className='p-1 rounded hover:bg-green-300  text-cyan-600' href='/'>HOME</Link >) :


              (
                <Link href='/characters'>
                  <div className='p-1 rounded hover:bg-green-300  text-cyan-600'>←</div>
                </Link>)}

          </>
        )}

      </div>
    </nav>
  )
}

export default Navbar