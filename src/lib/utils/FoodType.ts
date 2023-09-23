export type Food = {
  _id: string,
  image: string,
  name: string,
  price: number,
  category: {
    _id: string,
    name: string,
  }
}