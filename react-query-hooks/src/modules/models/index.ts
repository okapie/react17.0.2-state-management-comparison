export type TodoProps = {
  id: number
  memo: string
  created_at: string
  updatedAt: string
}

export type TodoResponse = {
  data: TodoProps[]
  message: string
  status: string
}
