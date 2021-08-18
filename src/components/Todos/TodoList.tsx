import TodoItem from './TodoItem';
import Todo from '../../models/todo';
import classes from './TodoList.module.css';

interface TodoListProps {
  todos: Todo[];
  onRemoveTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, onRemoveTodo }) => (
  <ul className={classes.todos}>
    {todos.map(item => (
      <TodoItem
        key={item.id}
        text={item.text}
        onRemoveTodo={onRemoveTodo.bind(null, item.id)}
      />
    ))}
  </ul>
);

export default TodoList;
