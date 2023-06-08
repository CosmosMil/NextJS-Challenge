import React from 'react'
import { resourceLimits } from 'worker_threads';

type Props = {}

const Episodes = (props: Props) => {




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
      }
    }
   }
  
}
      `,
    }),
  })
    .then((res) => res.json())
    .then((result) => console.log(result));

  return (
    <div>

    </div>
  )
}

export default Episodes