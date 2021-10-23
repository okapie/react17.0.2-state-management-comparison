import { useTodosFetch } from "../../hooks/fetcher/useTodosFetch"

function Todo() {
  const { isLoading, isError, data } = useTodosFetch()
  console.log(isLoading, isError, data)

  return (
    <div>Todo Page</div>
  );
}

export default Todo;
