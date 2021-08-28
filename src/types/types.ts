export interface Components {
  texto: string;
  adderValue: number;
  key: number;
}

export interface Props {
  children: React.ReactNode;
}

export interface ContextValue {
  counter: Array<Components>;
  addCounter: Function;
  deleteCounter: Function;
}
