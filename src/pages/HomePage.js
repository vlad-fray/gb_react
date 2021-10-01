import classes from './HomePage.module.css';
import News from './../components/News/News';
import { useDispatch } from 'react-redux';
import { reloadNewsThunk } from './../actions/homeActions';

const HomePage = () => {
  const dispatch = useDispatch();
  const reloadNewsHandler = () => {
    dispatch(reloadNewsThunk());
  };

  return (
    <section className={classes.home}>
      <News />
      <div className={classes['side-bar']}>
        <button onClick={reloadNewsHandler}>🗘 Refresh</button>
        <ul className={classes.publics}>
          <h4>Subscribed to:</h4>
          <li>StarWars</li>
        </ul>
      </div>
    </section>
  );
};

export default HomePage;
