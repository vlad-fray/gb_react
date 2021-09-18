import { IconButton, Badge } from '@material-ui/core';
import { memo } from 'react';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Social network</h1>
      <nav>
        <NavLink exact activeClassName={classes.active} to='/'>
          Home
        </NavLink>
        <NavLink activeClassName={classes.active} to='/messages'>
          Dialogs
        </NavLink>
      </nav>
      <div>
        <IconButton>
          <Badge badgeContent={0} color='secondary'>
            <NotificationsNoneIcon />
          </Badge>
        </IconButton>
        <IconButton>
          <Badge badgeContent={0} color='secondary'>
            <ChatBubbleOutlineIcon />
          </Badge>
        </IconButton>
        <IconButton>
          <Badge badgeContent={0} color='secondary'>
            <ExitToAppIcon />
          </Badge>
        </IconButton>
      </div>
    </header>
  );
};

export default memo(Header);
