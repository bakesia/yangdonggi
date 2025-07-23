import { UseTodoStore } from "../store/UseTodoStore";
import { GrUpdate } from "react-icons/gr";
import { RiDeleteBinFill } from "react-icons/ri";

export default function TodoList({ todo, idx, onEditClick }) {
  const toggleTodo = UseTodoStore((state) => state.toggleTodo);
  const delTodo = UseTodoStore((state) => state.delTodo);

  return (
    <div className="border p-5 mb-2 rounded-lg flex items-center justify-between max-w-full min-w-0">
      <div className="flex gap-5 min-w-0">
        {" "}
        {/* 여기 min-w-0 추가 */}
        <input
          type="checkbox"
          checked={todo.done}
          className="w-6 h-6 mt-1"
          onChange={() => toggleTodo(idx)}
        />
        <div
          className={`font-bold text-base truncate overflow-hidden whitespace-nowrap ${
            todo.done ? "line-through text-gray-300" : ""
          }`}
        >
          {idx + 1}. {todo.title}
        </div>
      </div>
      <div className={`flex gap-3 ${todo.done ? "hidden" : ""}`}>
        <button onClick={() => onEditClick(idx)}>
          <GrUpdate />
        </button>
        <button
          onClick={() => {
            const confirmDelete = window.confirm(
              `할 일(${todo.title})을 정말 목록에서 지우시겠습니까?`
            );
            if (confirmDelete) delTodo(idx);
          }}
        >
          <RiDeleteBinFill />
        </button>
      </div>
    </div>
  );
}
