import data from './mockNotifications';
import Notification from './Notification';

export default function Notifications({ allRead, setUnRead }) {
  return (
    <div>
      {data.map((el, index) => (
        <Notification
          key={index}
          avt={el.avt}
          user={el.user}
          action={el.action}
          post={el.post}
          group={el.group}
          time={el.time}
          allRead={allRead}
          setUnRead={setUnRead}
          pct={el.pct}
        />
      ))}
    </div>
  );
}
