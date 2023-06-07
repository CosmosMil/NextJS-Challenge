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
          <Link className='p-1 rounded hover:bg-lime-300  text-cyan-600 text-2xl' style={{ fontFamily: 'get_schwifty' }} href='/characters'>CHARACTERS</Link >
        ) : (
          <>
            {pathname === '/characters' ? (
              <Link className='p-1 rounded hover:bg-lime-300 text-cyan-600 text-2xl' style={{ fontFamily: 'get_schwifty' }} href='/'>HOME</Link >) :


              (
                <Link href='/characters'>
                  <div className='p-1 rounded hover:bg-lime-300 text-cyan-600 text-2xl' style={{ fontFamily: 'get_schwifty' }}>←</div>
                </Link>)}

          </>
        )}

      </div>
    </nav>
  )
}

export default Navbar