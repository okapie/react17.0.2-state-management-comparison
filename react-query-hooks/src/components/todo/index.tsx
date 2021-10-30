import { useTodosFetch } from "../../modules/hooks/fetcher/useTodosFetch"

function Todo() {
  const { isLoading, isError, data } = useTodosFetch()

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
    </div>
  );
}

export default Todo;
