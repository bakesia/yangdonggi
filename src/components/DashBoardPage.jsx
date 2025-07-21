import { useState } from "react";
import CreateY from "./CreateY";
import { UseTodoStore } from "../store/UseTodoStore";

export default function DashBoardPage() {
  const todos = UseTodoStore((state) => state.todos);
  const toggleTodo = UseTodoStore((state) => state.toggleTodo);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-white rounded-lg w-full p-3 m-3">
        {todos.map((todos, idx) => (
          <div
            key={idx}
            className={`border p-3 mb-2 rounded-lg flex items-center justify-between ${
              todos.done ? "line-through text-gray-400" : ""
            }`}
          >
            <div className="font-bold">
              {idx + 1}. {todos.title} 크기 : ({todos.size})
            </div>
            <input
              type="checkbox"
              checked={todos.done}
              onChange={() => toggleTodo(idx)}
            />
          </div>
        ))}
      </div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-sky-500 text-white p-2 rounded text-base font-bold hover:bg-sky-700 transition-colors duration-300 ease-in-out"
      >
        ▶️ 양동이 만들기
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <CreateY onClose={() => setIsModalOpen(false)} />
        </div>
      )}
    </div>
  );
}
