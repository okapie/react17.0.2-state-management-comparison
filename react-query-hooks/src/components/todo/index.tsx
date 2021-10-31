import { useState } from "react"
import { useTodosFetch } from "../../modules/hooks/fetcher/useTodosFetch"
import { useTodoPost } from "../../modules/hooks/fetcher/useTodoPost"

function Todo() {
  const { isLoading, isError, data } = useTodosFetch()
  const [inputText, setInputText] = useState("")
  const mutation = useTodoPost()

  return (
    <div>
      <h1>Todo List Page</h1>
      {isLoading && (
        <span>Now loading...</span>
      )}
      {isError && (
        <span>An error has occurred.</span>
      )}
      {data?.data.map(({ memo }, index) => <span key={`todo-${index}`}>{memo}</span>)}
      <div>
        <input type="text" onChange={e => setInputText(e.target.value)} />
        <button type="button" onClick={() => mutation.mutate(inputText)}>Add Todo</button>
      </div>
    </div>
  );
}

export default Todo;
