import React, { useEffect, useState } from 'react'
import { resourceLimits } from 'worker_threads';

type Props = {}

const Episodes = (props: Props) => {

  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch('https://rickandmortyapi.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `query GetSeasonOne {
        episodes(filter: {episode: "S01"})
  {
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
      }),
    })
      .then((res) => res.json())
      .then((result) => {

        console.log(result.data.episodes.results);
        setEpisodes(result.data.episodes.results);

      });
  }, []);



  return (
    <div>
      {episodes && episodes.map((episode: Episode) => (
        <div key={episode.id}>
          <h2>{episode.name}</h2>


        </div>
      ))}

    </div>
  )
}

export default Episodes