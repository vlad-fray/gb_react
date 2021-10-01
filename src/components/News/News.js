import classes from './News.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadNewsThunk } from './../../actions/homeActions';

const News = () => {
  const dispatch = useDispatch();
  const { vehicle, person, starship } = useSelector((state) => state.home.news);
  console.log(vehicle, person, starship);

  const { name: perName, gender, skin_color: skinColor } = person;
  const {
    name: vehName,
    cargo_capacity: vehCapacity,
    model: vehModel,
  } = vehicle;
  const {
    name: starName,
    cargo_capacity: starCapacity,
    model: starModel,
  } = starship;

  useEffect(() => {
    dispatch(loadNewsThunk());
  }, [dispatch]);

  return (
    <div className={classes.news}>
      <h3>News</h3>
      <div className={classes['news-item']}>
        <h4>
          <span>Person Name:</span>
          {perName}
        </h4>
        <p>
          <span>Gender:</span>
          {gender}
        </p>
        <p>
          <span>Skin Color:</span>
          {skinColor}
        </p>
      </div>
      <div className={classes['news-item']}>
        <h4>
          <span>Vehicle Name:</span>
          {vehName}
        </h4>
        <p>
          <span>Capacity:</span>
          {vehCapacity}
        </p>
        <p>
          <span>Model:</span>
          {vehModel}
        </p>
      </div>
      <div className={classes['news-item']}>
        <h4>
          <span>Starship Name:</span>
          {starName}
        </h4>
        <p>
          <span>Capacity:</span>
          {starCapacity}
        </p>
        <p>
          <span>Model:</span>
          {starModel}
        </p>
      </div>
    </div>
  );
};

export default News;
