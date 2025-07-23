import { UseTodoStore } from "../store/UseTodoStore";
import { FaBucket } from "react-icons/fa6";

export default function Header() {
  const selectedDate = UseTodoStore((state) => state.selectedDate);
  const setSelectedDate = UseTodoStore((state) => state.setSelectedDate);
  const todos = UseTodoStore((state) => state.todos);

  const filteredTodos = todos.filter(
    (todo) => todo.selectedDate === selectedDate
  );

  const doneCount = filteredTodos.filter((t) => t.done).length;

  return (
    <header className="bg-gradient-to-b from-sky-500 to-sky-300 flex flex-col items-start p-3 text-white text-2xl font-bold rounded-xl w-full sm:w-[70%] xl:w-[50%] mx-auto">
      <span className="flex gap-3">
        <FaBucket className="mt-1" />
        YangDonggI
      </span>
      <div className="text-base pt-5 flex justify-between w-full">
        <span>오늘의 양동이 {`${doneCount} / ${filteredTodos.length}`} 개</span>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="text-black p-1 bg-none"
        />
      </div>
    </header>
  );
}
