import { useState } from "react";
import { FaBucket } from "react-icons/fa6";
import { UseTodoStore } from "../store/UseTodoStore";

export default function CreateY({
  isEdit,
  initialTitle = "",
  inititalSize = "소",
  onClose,
  onSubmit,
}) {
  const [title, setTitle] = useState(initialTitle);
  const [size, setSize] = useState(inititalSize);
  const selectedDate = UseTodoStore((state) => state.selectedDate);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return alert("할 일을 입력해 주세요.");

    onSubmit({ title, size, selectedDate });
    // console.log({ title, size, selectedDate });
    onClose();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-96 max-w-full mx-4">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold flex gap-2">
          <FaBucket className="mt-1" />
          {isEdit ? "양동이 수정하기" : "양동이 만들기"}
        </h2>
        <button
          type="button"
          onClick={onClose}
          className="rounded px-1 font-bold bg-gray-200 hover:bg-gray-300 transition"
        >
          X
        </button>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="title">
            해야할 일
          </label>
          <input
            id="title"
            type="text"
            placeholder="양동이 이름을 입력하세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold mb-1" htmlFor="size">
            양동이 크기
          </label>
          <select
            id="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            <option value="대">큰 양동이</option>
            <option value="중">중간 양동이</option>
            <option value="소">작은 양동이</option>
          </select>
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="submit"
            className="px-4 py-2 rounded bg-sky-500 text-white font-bold hover:bg-sky-700 transition"
          >
            <span className="flex gap-2">
              <FaBucket className="mt-1" /> 생성
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}
