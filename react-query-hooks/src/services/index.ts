import { AxiosPromise } from "axios";
import { client } from "../libs/httpClient";
import { TodoResponse } from "../modules/models"

const fetchTodos = ():AxiosPromise<TodoResponse> => client().get("/todos.json")
const addTodo = (memo: string):AxiosPromise<TodoResponse> => client().post("/todos.json", { memo })

export default class TodosService {
  static async getTodoList() {
    const data = fetchTodos()
    return await data
      .then(response => response.data)
  }

  static async postTodo(memo: string) {
    const data = addTodo(memo)
    return await data
      .then(response => {
        return response.data
      })
  }
}
