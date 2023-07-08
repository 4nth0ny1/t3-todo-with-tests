import { Todo } from "./Todo";
import { api } from "../utils/api";

export function TodoList() {
  const { data: todos } = api.todo.getAllTodos.useQuery();
  return (
    <div>
      {todos?.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </div>
  );
}
