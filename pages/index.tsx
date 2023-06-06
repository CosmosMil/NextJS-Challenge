import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import image from '../images/FU.png'


const Home: NextPage = () => {
  return (
    <div>
      <Image src={image} alt='Rick and Morty say FU' />

    </div>

  )
}

export default Home
