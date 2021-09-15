import { memo } from 'react';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Social Network</h1>
    </header>
  );
};

export default memo(Header);
