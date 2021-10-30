import { AxiosPromise } from "axios";
import { client } from "../libs/httpClient";
import { TodoResponse } from "../modules/models"

const fetchTodos = ():AxiosPromise<TodoResponse> => client().get("/todos.json")

export default class TodosService {
  static async getTodoList() {
    const data = fetchTodos()
    return await data
      .then(response => response.data)
  }
}
