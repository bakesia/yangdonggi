import { useState } from "react";
import CreateY from "./CreateY";
import TodoList from "../ui/TodoList";
import { UseTodoStore } from "../store/UseTodoStore";
import { CgPlayButtonR } from "react-icons/cg";

export default function DashBoardPage() {
  const todos = UseTodoStore((state) => state.todos);
  const selectedDate = UseTodoStore((state) => state.selectedDate);
  const addTodo = UseTodoStore((state) => state.addTodo);
  const updateTodo = UseTodoStore((state) => state.updateTodo);

  const filteredTodos = todos.filter(
    (todo) => todo.selectedDate === selectedDate
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);

  return (
    <div className="flex flex-col h-full justify-center items-center w-full sm:w-[70%] xl:w-[50%] mx-auto">
      <div className="bg-white rounded-lg p-3 m-3 w-full min-h-[50vh]">
        {filteredTodos.length === 0 ? (
          <div className="flex flex-col justify-center items-center text-gray-400">
            <span>할 일이 없습니다. 😴</span>
          </div>
        ) : (
          filteredTodos.map((todo, idx) => (
            <TodoList
              key={idx}
              todo={todo}
              idx={idx}
              onEditClick={(index) => setEditingIndex(index)}
            />
          ))
        )}

        {filteredTodos.length > 0 &&
        filteredTodos.every((todo) => todo.done === true) ? (
          <span className="flex justify-center items-center m-5 text-gray-400 animate-bounce">
            모든 할 일을 다 끝마쳤어요 ~🎊
          </span>
        ) : (
          ""
        )}
      </div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex gap-2 bg-sky-500 text-white p-2 rounded text-base font-bold hover:bg-sky-700 transition-colors duration-300 ease-in-out"
      >
        <CgPlayButtonR className="mt-1" /> 양동이 만들기
      </button>

      {/* 양동이 생성 창 띄우기 */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <CreateY
            isEdit={false}
            onClose={() => setIsModalOpen(false)}
            onSubmit={(newTodo) => {
              addTodo({ ...newTodo, done: false });
              setIsModalOpen(false);
            }}
          />
        </div>
      )}

      {/* 양동이 수정 창 띄우기 */}
      {editingIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <CreateY
            isEdit={true}
            initialTitle={todos[editingIndex].title}
            initialSize={todos[editingIndex].size}
            onClose={() => setEditingIndex(null)}
            onSubmit={(updatedTodo) => {
              updateTodo(editingIndex, updatedTodo);
              setEditingIndex(null);
            }}
          />
        </div>
      )}
    </div>
  );
}
