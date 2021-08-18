import { useContext, useRef } from 'react';
import TodosContext from '../store/todos-context';
import classes from './NewTodo.module.css';

const NewTodo: React.FC = () => {
  const { addTodo } = useContext(TodosContext);
  const todoInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredTodo = todoInputRef.current!.value;
    if (!enteredTodo.trim().length) return;

    addTodo(enteredTodo);
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <label>
        Todo:
        <input type="text" ref={todoInputRef} />
      </label>
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
