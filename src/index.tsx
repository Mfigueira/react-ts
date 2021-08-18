import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { TodosContextProvider } from './store/todos-context';
import App from './components/App/App';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <TodosContextProvider>
      <App />
    </TodosContextProvider>
  </Provider>,
  document.getElementById('root')
);
