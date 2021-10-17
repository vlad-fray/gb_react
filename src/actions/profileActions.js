import { CHANGE_PROFILE_INFO } from '../store/profileReducer';

const changeProfileInfoAC = ({ username, age, status }) => {
  return {
    type: CHANGE_PROFILE_INFO,
    payload: { username, age, status },
  };
};

export const changeProfileInfoThunk = (info) => (dispatch) => {
  dispatch(changeProfileInfoAC(info));
};
