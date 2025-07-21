import { UseTodoStore } from "../store/UseTodoStore";

export default function Header() {
  const todos = UseTodoStore((state) => state.todos);
  const doneCount = todos.filter((t) => t.done).length;

  return (
    <header className="bg-gradient-to-b from-sky-500 to-sky-300 flex flex-col items-start p-3 text-white text-2xl font-bold rounded-xl">
      🪣 YangDonggI
      <div className="text-base pt-5 flex justify-between w-full">
        <span>오늘의 양동이 {`${doneCount} / ${todos.length}`} 개</span>
      </div>
    </header>
  );
}
