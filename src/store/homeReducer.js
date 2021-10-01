const initialState = {
  news: [],
};

export const RELOAD_NEWS = 'LOAD_NEWS';

const homeReducer = (state = initialState, action) => {
  if (action.type === RELOAD_NEWS) {
    const { news } = action.payload;
    return { news };
  }

  return state;
};

export default homeReducer;
