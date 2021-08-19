import { useState } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Form from '../UI/Form';

const RepoList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.repositories
  );

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    searchRepositories(term);
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <button type="submit">Search</button>

      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.length > 0 && (
        <ul>
          {data.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      )}
    </Form>
  );
};

export default RepoList;
