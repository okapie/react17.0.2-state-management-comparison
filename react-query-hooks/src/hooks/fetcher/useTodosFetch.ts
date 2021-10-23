import { useQuery } from "react-query"

import TodosService from "../../services/index"

export const useTodosFetch = () => {
  return useQuery("todos-list", () => TodosService.getTodoList)
}
