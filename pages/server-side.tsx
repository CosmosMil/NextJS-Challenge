import { gql } from "@apollo/client";
import client from "../apollo-client";

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
query GetSeasonOne {
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
  });
  console.log(data.results);
  return {
    props: {
      results: data.results,
    },

  };
};
