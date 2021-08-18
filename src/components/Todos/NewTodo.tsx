import { useContext, useRef } from 'react';
import TodosContext from '../../store/todos-context';
import Form from '../UI/Form';

const NewTodo: React.FC = () => {
  const { addTodo } = useContext(TodosContext);
  const todoInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredTodo = todoInputRef.current!.value;
    if (!enteredTodo.trim().length) return;

    todoInputRef.current!.value = '';
    addTodo(enteredTodo);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        My To Do:
        <input type="text" ref={todoInputRef} />
      </label>
      <button type="submit">Add</button>
    </Form>
  );
};

export default NewTodo;
