import { IconButton, Badge, InputBase } from '@material-ui/core';
import { memo } from 'react';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Social network</h1>
      <InputBase
        placeholder='Search'
        startAdornment={<SearchIcon fontSize='small' />}
      />
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
