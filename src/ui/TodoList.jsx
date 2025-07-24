import { UseTodoStore } from "../store/UseTodoStore";
import { GrUpdate } from "react-icons/gr";
import { RiDeleteBinFill } from "react-icons/ri";
import { FaBucket } from "react-icons/fa6";

export default function TodoList({ todo, idx, onEditClick }) {
  const toggleTodo = UseTodoStore((state) => state.toggleTodo);
  const delTodo = UseTodoStore((state) => state.delTodo);

  // 양동이 사이즈 매핑 변수
  const sizeTextMap = {
    소: "작은",
    중: "중간",
    대: "큰",
  };

  return (
    <div className="border p-5 mb-2 rounded-lg flex items-center justify-between max-w-full min-w-0">
      <div className="flex gap-5 min-w-0">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => toggleTodo(idx)}
            className="hidden"
          />
          <span
            className={`w-5 h-5 border-2 rounded ${
              todo.done ? "bg-sky-500 border-sky-500" : "border-gray-400"
            } flex items-center justify-center transition`}
          >
            {todo.done && (
              <svg
                className="w-3 h-3 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                viewBox="0 0 24 24"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            )}
          </span>
        </label>
        <div
          className={`font-bold text-base truncate overflow-hidden whitespace-nowrap ${
            todo.done ? "line-through text-gray-300" : ""
          }`}
        >
          {idx + 1}. {todo.title}
        </div>
      </div>
      <div className="flex gap-4">
        <span className="flex bg-sky-500 text-white gap-1 rounded-md py-1 text-sm min-w-[60px] justify-center">
          {sizeTextMap[todo.size]}
          <FaBucket className="mt-1" />
        </span>
        <div className={`flex gap-4 ${todo.done ? "hidden" : ""}`}>
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
    </div>
  );
}
