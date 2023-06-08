interface ArrayData {
  map(arg0: (character: any) => React.JSX.Element): React.ReactNode;
  results: Array,
  
}

interface Character {

  id: number,
  name: string,
  status: string,
  species: string,
  image: string

}

interface Episode {

  id: number,
  name: string,
  air_date: string,
  episode: string,
  characters: Character[],
}