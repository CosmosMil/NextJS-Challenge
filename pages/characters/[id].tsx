import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetServerSidePropsType } from "next";
import Router, { useRouter } from "next/router";
import { stringify } from "querystring";


const Character = ({ data }: InferGetServerSidePropsType<typeof getStaticProps>) => {



  return (
    <div key={data.id}>

      <div className='flex flex-wrap items-start justify-center'>
        <div className='my-24 p-3'
        >
          <img src={data.image} className='h-96 rounded-full p-5' />
          <p className='text-center text-cyan-600 p-5 text-3xl' style={{ fontFamily: 'get_schwifty' }}>{data.name} <br /> </p>
          <div className='text-center text-cyan-600 p-2 text-2xl' style={{ fontFamily: 'get_schwifty' }}>{data.species} <br /> {data.status}</div>


        </div>

      </div>
    </div>



  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  const data = await response.json();
  const paths = data.results.map((character: Character) => ({
    params: { id: character.id.toString() }
  }));



  return { paths, fallback: false }


}


export const getStaticProps: GetStaticProps<{ data: Character }> = async (context: GetStaticPropsContext) => {
  const id = context.params?.id as string;
  const url = `https://rickandmortyapi.com/api/character/${id}`;

  try {
    const result = await fetch(url);
    const data: Character = await result.json();
    console.log(data);
    return { props: { data } };

  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      notFound: true
    }
  }

}
export default Character