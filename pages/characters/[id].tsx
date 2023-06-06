import Router, { useRouter } from "next/router";


const Info = () => {
  const router = useRouter();
  console.log(router.query.id)

  return (
    <div>
      <h1>This is the info page about Character #{router.query.id}</h1>
    </div>
  );
}

export default Info