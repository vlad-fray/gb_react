import classes from './Profile.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_PROFILE_INFO } from '../../store/profileReducer';

const Profile = () => {
  const dispatch = useDispatch();

  const { imgUrl, username, age, status } = useSelector(
    (state) => state.profile
  );
  const [inputName, setInputName] = useState(username);
  const [inputAge, setInputAge] = useState(age);
  const [inputStatus, setInputStatus] = useState(status);

  const [isEditing, setIsEditing] = useState(false);

  const handleChangeProfileData = (e) => {
    e.preventDefault();
    dispatch({
      type: CHANGE_PROFILE_INFO,
      payload: {
        username: inputName,
        age: inputAge,
        status: inputStatus,
      },
    });
    setIsEditing(false);
  };

  return (
    <div className={`container`}>
      <div className={classes.profile}>
        <img src={imgUrl} alt='profile' />
        {!isEditing && (
          <div className={classes['user-info']}>
            <h3>
              Profile info
              <button type='button' onClick={() => setIsEditing(true)}>
                ✎
              </button>
            </h3>
            <p className={classes.username}>{username}</p>
            <p className={classes.age}>{age}</p>
            <p className={classes.status}>{status}</p>
          </div>
        )}
        {isEditing && (
          <form
            className={classes['user-info']}
            onSubmit={handleChangeProfileData}
          >
            <h3>
              Profile info
              <button type='button' onClick={() => setIsEditing(false)}>
                &#128473;
              </button>
            </h3>
            <input
              type='text'
              maxLength='50'
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
              className={classes.username}
            />
            <input
              type='number'
              min='1'
              max='150'
              value={inputAge}
              onChange={(e) => setInputAge(e.target.value)}
              className={classes.age}
            />
            <input
              type='text'
              maxLength='100'
              value={inputStatus}
              onChange={(e) => setInputStatus(e.target.value)}
              className={classes.status}
            />
            <button className={classes.submit} type='submit'>
              Save
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
