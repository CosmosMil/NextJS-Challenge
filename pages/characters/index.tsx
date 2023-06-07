import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Link from 'next/link'
import React from 'react'
import styles from '../../styles/Characters.module.css'
import Image from 'next/image'
import image from '../../images/logo.png'

type Props = {
  data: Data
}

const Characters = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  console.log('data from client: ', data)
  return (
    <div>

      <div className='flex flex-wrap items-start justify-center'>
        <Image src={image} alt='Rick and Morty logotype' />

        {data ? data.results.map((character: Character) => {


          return (

            <React.Fragment key={character.id}>


              <div className='h-80 w-54 p-3 border-2 border-indigo-700 overflow-hidden mx-2 my-2'
              >
                <img src={character.image} className='object-scale-down w-52 h-52' />
                <div className='text-center text-cyan-600 p-2'>
                  {character.name} <br /> {character.species} <br /> {character.status}
                </div>
              </div>


            </React.Fragment>
          );
        }) : null}




      </div>

    </div>
  )
}

export default Characters



export const getServerSideProps: GetServerSideProps<{ data: Data | null }> = async (context) => {

  const url = 'https://rickandmortyapi.com/api/character';

  try {
    const result = await fetch(url);
    const data: Data = await result.json();

    return { props: { data } };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        data: null
      }
    }
  }
}



