import React, { useEffect, useState } from 'react'
import { gql } from "@apollo/client";
import client from '../../apollo-client';
import Character from '../characters/[id]';

type Props = {
  results: any[]
}

const Episodes = ({ results }: Props) => {

  const [episodes, setEpisodes] = useState(results);


  //   const [episodes, setEpisodes] = useState([]);

  //   useEffect(() => {
  //     fetch('https://rickandmortyapi.com/graphql', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         query: `query GetSeasonOne {
  //         episodes(filter: {episode: "S01"})
  //   {
  //     results {
  //       id
  //       name
  //       air_date
  //       episode
  //       characters {
  //         name
  //         image
  //       }
  //     }
  //    }

  // }
  //       `,
  //       }),
  //     })
  //       .then((res) => res.json())
  //       .then((result) => {

  //         console.log(result.data.episodes.results);
  //         setEpisodes(result.data.episodes.results);

  //       });
  //   }, []);

  let characters: Character[] = [];
  episodes && episodes.forEach((episode) => {
    characters.push(...episode.characters);
  });



  return (
    <div>
      {episodes &&
        episodes.map((episode) => (
          <div key={episode.id} className="grid grid-cols-2 gap-5 p-8">

            <div>
              <h2 className='ml-10 mt-10 text-3xl text-cyan-600' style={{ fontFamily: 'get_schwifty' }}>{episode.name}</h2>
            </div>
            <div>
              {episode.characters.map((character: Character) => (
                <div key={character.id}>
                  <h2 className=' text-cyan-600 text-xl' style={{ fontFamily: 'get_schwifty' }}>{character.name}</h2>
                </div>
              ))}
            </div>
          </div>

        ))}
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query GetSeasonOne {
        episodes(filter: {episode: "S01"}) {
          results {
            id
            name
            air_date
            episode
            characters {
              name
              episode {
                id
              }
            }
          }
        }
      }
    `,
  });

  console.log(data.episodes.results);

  return {
    props: {
      results: data.episodes.results,
    },
  };
};

export default Episodes