const initialState = {
  news: [],
};

export const LOAD_NEWS = 'LOAD_NEWS';

const homeReducer = (state = initialState, action) => {
  if (action.type === LOAD_NEWS) {
    const { news } = action.payload;
    return { news };
  }

  return state;
};

export default homeReducer;
