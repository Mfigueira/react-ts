import { useContext } from 'react';
import TodosContext from '../../store/todos-context';
import NewTodo from './NewTodo';
import SearchTodo from './SearchTodo';
import TodoList from './TodoList';

const Todos: React.FC = () => {
  const { todos, removeTodo } = useContext(TodosContext);

  return (
    <>
      <h1>To Do List</h1>
      <NewTodo />
      {!!todos.length && (
        <>
          <TodoList todos={todos} onRemoveTodo={removeTodo} />
          <SearchTodo todos={todos} />
        </>
      )}
    </>
  );
};

export default Todos;
