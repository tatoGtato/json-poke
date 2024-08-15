export type Pokemon = {
    id: string,
    name: string,
    type: string,
    image: string,
    evolutions: Array<Pokemon>
  }