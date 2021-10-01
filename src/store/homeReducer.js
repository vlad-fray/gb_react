const initialState = {
  news: [],
  counts: {},
};

export const RELOAD_NEWS = 'LOAD_NEWS';
export const LOAD_COUNT = 'LOAD_COUNT';

const homeReducer = (state = initialState, action) => {
  if (action.type === RELOAD_NEWS) {
    const { news } = action.payload;
    if (!news) return state;
    return { ...state, news };
  }

  if (action.type === LOAD_COUNT) {
    const { vehCount, peopleCount, starCount } = action.payload;
    return { ...state, counts: { vehCount, peopleCount, starCount } };
  }

  return state;
};

export default homeReducer;
