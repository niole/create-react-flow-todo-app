export type Todo {
  done: boolean,
  content: string,
  created: Date,
}

export type DateFormatter = (date: Date) => string

export type TodoCreator = (content: string) => Todo
