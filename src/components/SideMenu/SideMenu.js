import classes from './SideMenu.module.css';
import AddBoxIcon from '@material-ui/icons/AddBox';
import { NavLink } from 'react-router-dom';
const SideMenu = ({ dialogsList }) => {
  return (
    <aside className={`${classes['side-menu']}`}>
      {dialogsList?.map((dialog) => (
        <NavLink
          key={dialog.dialogId}
          activeClassName={classes['active-chat']}
          to={`/messages/${dialog.dialogId}`}
        >
          {dialog.title}
        </NavLink>
      ))}
      <NavLink
        className={classes.add}
        to='/messages/add-dialog'
        activeClassName={classes['active-chat']}
      >
        <AddBoxIcon />
        Add a new chat
      </NavLink>
    </aside>
  );
};

export default SideMenu;
