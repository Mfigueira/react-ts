import classes from './Form.module.css';

interface FormProps {
  onSubmit: (event: React.FormEvent) => void;
}

const Form: React.FC<FormProps> = ({ onSubmit, children }) => {
  return (
    <form className={classes.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
