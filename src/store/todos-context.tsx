import React, { useState } from 'react';
import { Todo } from '../models/todo';

type TodosContextObj = {
  todos: Todo[];
  addTodo: (todoText: string) => void;
  removeTodo: (id: string) => void;
};

const TodosContext = React.createContext<TodosContextObj>({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
});

export const TodosContextProvider: React.FC = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos(currTodos => [...currTodos, newTodo]);
  };

  const handleRemoveTodo = (id: string) => {
    setTodos(currTodos => currTodos.filter(todo => todo.id !== id));
  };

  const contextValue: TodosContextObj = {
    todos,
    addTodo: handleAddTodo,
    removeTodo: handleRemoveTodo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContext;
