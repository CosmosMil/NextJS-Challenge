import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import image from '../images/FU.png'


const Home: NextPage = () => {
  return (
    <div className='flex items-center text-3xl  text-cyan-600' style={{ fontFamily: 'get_schwifty' }}>
      <Image src={image} alt='Rick and Morty say FU' />
      <div className={`flex-col ${styles.positionright}`}>
        <p>welcome <br /> to server side rendering <br /> and static generation</p>
      </div>



    </div>

  )
}

export default Home
