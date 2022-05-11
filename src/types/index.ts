export interface Component {
  text: string
  value: number
  id: number
}

export interface Store {
  counters: Component[]
}
