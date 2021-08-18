import { useState } from 'react';
import Form from '../UI/Form';
import Todo from '../../models/todo';

interface SearchTodoProps {
  todos: Todo[];
}

const SearchTodo: React.FC<SearchTodoProps> = ({ todos }) => {
  const [todo, setTodo] = useState<Todo | undefined>();
  const [query, setQuery] = useState('');

  // if handler is inline in jsx, it does not need type annotation:
  // onChange={e => setTodoInputVal(e.target.value)}
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const foundTodo = todos.find(todo => todo.text === query);

    setTodo(foundTodo);
  };

  // just to test another event type: Drag
  const handleDragStart = (event: React.DragEvent<HTMLParagraphElement>) => {
    console.log("I'm being dragged!");
    console.log(event);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <label>
          Looking for a To Do?
          <input type="text" value={query} onChange={handleInputChange} />
        </label>
        <button type="submit">Search</button>
      </Form>

      <div
        draggable
        onDragStart={handleDragStart}
        style={{
          border: '2px solid #ebb002',
          padding: '20px',
          margin: '0 40px',
        }}
      >
        {todo && todo.text}
      </div>
    </>
  );
};

export default SearchTodo;
