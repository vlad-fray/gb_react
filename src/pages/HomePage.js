import classes from './HomePage.module.css';
import News from './../components/News/News';

const HomePage = () => {
  return (
    <section className={classes.home}>
      <News />
      <div className={classes['side-bar']}>
        <button>🗘 Refresh</button>
        <ul className={classes.publics}>
          <h4>Subscribe to:</h4>
          <li>Public 1</li>
        </ul>
      </div>
    </section>
  );
};

export default HomePage;
