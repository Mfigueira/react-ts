import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store';

export const useActions = () => {
  const dispatch = useDispatch();

  // { searchRepositories: dispatch(searchRepositories) }
  return bindActionCreators(actionCreators, dispatch);
};
