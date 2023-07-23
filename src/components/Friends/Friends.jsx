import { FriendListItem } from '../FriendListItem/FriendListItem.jsx';
import css from './Friends.module.css';
import PropTypes from 'prop-types';

export const Friends = ({ friends }) => {
  return (
    <div className={css.friendsContainer}>
      <ul className={css.friendList}>
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </div>
  );
};

Friends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
