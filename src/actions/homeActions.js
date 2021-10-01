import { reloadNewsAPI } from '../api/newsAPI';
import { RELOAD_NEWS } from './../store/homeReducer';

const reloadNewsAC = (news) => {
  return {
    type: RELOAD_NEWS,
    payload: { news },
  };
};

export const reloadNewsThunk = () => async (dispatch) => {
  const news = await reloadNewsAPI();
  dispatch(reloadNewsAC(news));
};
