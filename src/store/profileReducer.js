const initialState = {
  imgUrl:
    'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg',
  username: 'User',
  age: 21,
  status: 'Making a website with React',
};

export const CHANGE_PROFILE_INFO = 'CHANGE_PROFILE_INFO';

const profileReducer = (profile = initialState, action) => {
  if (action.type === CHANGE_PROFILE_INFO) {
    const { username, age, status } = action.payload;
    return { ...profile, username, age, status };
  }
  return profile;
};

export default profileReducer;
