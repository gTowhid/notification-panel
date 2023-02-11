import { useState } from 'react';
import classes from './NotificationPanel.module.css';
import Notifications from './Notifications';
import data from './mockNotifications';

export default function NotificationPanel() {
  const [allRead, setAllRead] = useState(false);
  const [unRead, setUnRead] = useState(data.length);

  const handleClick = () => {
    setAllRead(true);
    setUnRead(0);
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h3>Notifications</h3>
        <span className={classes.unread}>{unRead}</span>

        <button onClick={handleClick}>Mark all as read</button>
      </div>
      <Notifications allRead={allRead} setUnRead={setUnRead} />
    </div>
  );
}
