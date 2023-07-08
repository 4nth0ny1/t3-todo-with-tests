import type { Todo } from "../types";

type TodoProps = {
  todo: Todo;
};

export default function Todo({ todo }: TodoProps) {
  const { id, content, done } = todo;
  return (
    <div>
      <p role="content">{content}</p>
    </div>
  );
}
