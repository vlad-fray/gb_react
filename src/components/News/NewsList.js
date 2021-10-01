import classes from './NewsList.module.css';

const NewsList = ({ news }) => {
  const { vehicle, person, starship } = news;

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

  return (
    <>
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
    </>
  );
};

export default NewsList;
