import { useMutation } from "react-query"

import TodosService from "../../../services/index"

export const useTodoPost = () => {
  return useMutation((memo: string) => TodosService.postTodo(memo))
}
