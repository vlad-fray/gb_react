import classes from './SideMenu.module.css';
import AddBoxIcon from '@material-ui/icons/AddBox';
const SideMenu = ({ chats }) => {
  return (
    <aside className={`${classes['side-menu']}`}>
      {chats?.map((chat) => (
        <button
          onClick={() => console.log('hey')}
          key={chat.id}
          className={chat.id === 1 ? classes['active-chat'] : ''}
          disabled={chat.id === 1}
        >
          {chat.title}
        </button>
      ))}
      <button
        className={classes.add}
        onClick={() => console.log('addHey')}
      >
        <AddBoxIcon />
        Add a new chat
      </button>
    </aside>
  );
};

export default SideMenu;
