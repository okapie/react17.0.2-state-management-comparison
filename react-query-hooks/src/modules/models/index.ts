export type TodoProps = {
  id: number
  memo: string
  createdAt: string
  updatedAt: string
}

export type TodoResponse = {
  data: TodoProps[]
  message: string
  status: string
}
