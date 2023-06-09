import React, { useEffect, useState } from 'react'
import { gql } from "@apollo/client";
import client from '../../apollo-client';

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



  return (
    <div>
      {episodes && episodes.map((episode) => (
        <div key={episode.id}>
          <h2>{episode.name}</h2>


        </div>
      ))}

    </div>
  )
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
              image
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