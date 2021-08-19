import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { RepositoriesAction } from '../actions';

export const searchRepositories =
  (term: string) => async (dispatch: Dispatch<RepositoriesAction>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: term,
          },
        }
      );

      const repoNames = data.objects.map((res: any) => res.package.name);

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: repoNames,
      });
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
