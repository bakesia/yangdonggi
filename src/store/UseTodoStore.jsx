// zustand에서 create 함수 가져옴
import { create } from "zustand";

// useTodoStore: 상태를 담은 '스토어'를 만드는 함수
export const UseTodoStore = create((set) => ({
  // 1️⃣ 현재 저장된 모든 '양동이 목록' (배열)
  todos: [],

  // 2️⃣ 새 양동이(todo) 추가하는 함수
  addTodo: (todo) =>
    set((state) => ({
      todos: [...state.todos, todo], // 기존 배열에 새 todo 추가
    })),

  // 3️⃣ 완료 체크/해제 기능
  toggleTodo: (index) =>
    set((state) => {
      const newTodos = [...state.todos]; // 복사본 만들고
      newTodos[index].done = !newTodos[index].done; // 해당 항목 상태 변경
      return { todos: newTodos }; // 새 배열로 상태 업데이트
    }),
}));
