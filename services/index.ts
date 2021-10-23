import { client } from "../libs/httpClient";

export default class TodosService {
  static async getTodoList(): Promise<Object> {
    return await client()
      .get(`/todos`)
      .then(response => response.data)
      .catch(error => error.response);
  }
}
