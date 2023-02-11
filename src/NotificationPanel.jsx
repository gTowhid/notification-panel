import classes from './NotificationPanel.module.css';
import Notifications from './Notifications';

export default function NotificationPanel() {
    return <div className={classes.container}>
        <div className={classes.header}>
            <h3>Notifications</h3>
            <button>Mark all as read</button>
        </div>
        <Notifications />
    </div>
}