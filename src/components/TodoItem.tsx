import classes from './TodoItem.module.css';

export const TodoItem: React.FC<{
  text: string;
  onRemoveTodo: () => void;
}> = ({ text, onRemoveTodo }) => (
  <li className={classes.item} onClick={onRemoveTodo}>
    {text}
  </li>
);
