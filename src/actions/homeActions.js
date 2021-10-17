import { loadNewsCountAPI, reloadNewsAPI } from '../api/newsAPI';
import { LOAD_COUNT, RELOAD_NEWS } from './../store/homeReducer';

const reloadNewsAC = (news) => {
  return {
    type: RELOAD_NEWS,
    payload: { news },
  };
};

const loadNewsCountAC = ({ vehCount, peopleCount, starCount }) => {
  return {
    type: LOAD_COUNT,
    payload: { vehCount, peopleCount, starCount },
  };
};

export const reloadNewsThunk = (counts) => async (dispatch) => {
  const news = await reloadNewsAPI(counts);
  dispatch(reloadNewsAC(news));
};

export const loadNewsCountThunk = () => async (dispatch) => {
  const counts = await loadNewsCountAPI();
  dispatch(loadNewsCountAC(counts));
};
