export interface Component {
  texto: string
  adderValue: number
  id: number
}

export interface Store {
  counters: Component[]
}
