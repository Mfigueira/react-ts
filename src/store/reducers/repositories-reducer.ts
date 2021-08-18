import ActionType from '../actions';
import { RepositoriesAction } from '../actions/repositories';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const defaultState: RepositoriesState = {
  loading: false,
  error: null,
  data: [],
};

const repositoriesReducer = (
  state: RepositoriesState = defaultState,
  action: RepositoriesAction
): RepositoriesState => {
  if (action.type === ActionType.SEARCH_REPOSITORIES) {
    return { loading: true, error: null, data: [] };
  }

  if (action.type === ActionType.SEARCH_REPOSITORIES_SUCCESS) {
    return { loading: false, error: null, data: action.payload };
  }

  if (action.type === ActionType.SEARCH_REPOSITORIES_ERROR) {
    return { loading: false, error: action.payload, data: [] };
  }

  return state;
};

export default repositoriesReducer;
