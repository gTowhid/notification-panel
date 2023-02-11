import { useMemo, useState } from 'react';
import classes from './Notification.module.css';

export default function Notification({
  avt,
  user,
  action,
  post,
  group,
  time,
  allRead,
  setUnRead,
  pct,
}) {
  const [read, setRead] = useState(false);

  // console.log(read, user);
  // console.log(`allRead is ${allRead}`);

  useMemo(() => setRead(allRead), [allRead]);

  const handleClick = () => {
    setRead(true);
    !read && setUnRead((prev) => prev - 1);
  };

  return (
    <div
      className={classes.notificationBlock}
      onClick={handleClick}
      style={{
        backgroundColor: read ? 'white' : 'hsl(210, 60%, 98%)',
      }}
    >
      <img src={require('./assets/images/' + avt)} alt="avatar" />

      <div>
        <p>
          <span className={classes.user}>{user}</span>
          <span className={classes.action}> {action}</span>
          <span className={classes.post}> {post}</span>
          <span className={classes.group}> {group}</span>
          {!read ? <span className={classes.dot}></span> : null}
        </p>
        <p>
          <span className={classes.time}>{time}</span>
        </p>
      </div>

      {pct && (
        <img
          className={classes.picture}
          src={require('./assets/images/' + pct)}
          alt=""
        />
      )}
    </div>
  );
}
