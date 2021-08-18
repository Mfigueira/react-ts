import classes from './TodoItem.module.css';

interface TodoItemProps {
  text: string;
  onRemoveTodo: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ text, onRemoveTodo }) => (
  <li className={classes.item} onClick={onRemoveTodo}>
    {text}
  </li>
);

export default TodoItem;
