import React, { useEffect, useState } from 'react'
import { gql } from "@apollo/client";
import client from '../../apollo-client';

type Props = {
  results: Episode[]
}

const Episodes = ({ results }: Props) => {

  const [episodes, setEpisodes] = useState(results);
  const [season, setSeason] = useState('S01')

  useEffect(() => {
    const fetchEpisodes = async () => {
      const { data } = await client.query({
        query: gql`
          query GetEpisodesBySEason($season: String!) {
            episodes(filter: {episode: $season}) {
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
        variables: { season: season }
      });

      setEpisodes(data.episodes.results);
    }

    fetchEpisodes();
  }, [season]);

  const handleSeasonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSeason(e.target.value);
  }


  let characters: Character[] = [];
  episodes && episodes.forEach((episode) => {
    characters.push(...episode.characters);
  });



  return (
    <div>

      <div className='flex p-5'>
        <select onChange={handleSeasonChange}>
          <option value="S01">Season 1</option>
          <option value="S02">Season 2</option>
          <option value="S03">Season 3</option>
          <option value="S04">Season 4</option>
          <option value="S05">Season 5</option>

        </select>



      </div>
      {episodes &&
        episodes.map((episode) => (
          <div key={episode.id} className="grid mt-10 grid-cols-2 gap-5 p-8">

            <div>

              <h2 className='mt-10 text-3xl text-cyan-600' style={{ fontFamily: 'get_schwifty' }}>{episode.name}</h2>
              <h2 className='text text-cyan-600' >{episode.episode}</h2>
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

// export async function getServerSideProps() {
//   const { data } = await client.query({
//     query: gql`
//       query GetEpisodesBySEason($season: String!) {
//         episodes(filter: {episode: $season}) {
//           results {
//             id
//             name
//             air_date
//             episode
//             characters {
//               name
//               episode {
//                 id
//               }
//             }
//           }
//         }
//       }
//     `,

//   });


//   console.log(data.episodes.results);

//   return {
//     props: {
//       results: data.episodes.results,
//     },
//   };
// };

export default Episodes