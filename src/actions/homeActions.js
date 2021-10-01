import { loadNewsAPI } from '../api/newsAPI';
import { LOAD_NEWS } from './../store/homeReducer';

const loadNewsAC = (news) => {
  return {
    type: LOAD_NEWS,
    payload: { news },
  };
};

export const loadNewsThunk = () => async (dispatch) => {
  const news = await loadNewsAPI();
  dispatch(loadNewsAC(news));
};
