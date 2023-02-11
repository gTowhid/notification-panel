import data from './mockNotifications';
import classes from './Notifications.module.css'

export default function Notifications() {
    return <div>
        {
            data.map((el, index) => 
                <div key={index} className={classes.notificationBlock}>
                    <img src={require('./assets/images/' + el.img)} alt="avatar" />
                    <div>
                        <p>
                            <span className={classes.user}>{el.user}</span> 
                            <span className={classes.action}> {el.action}</span> 
                            <span className={classes.post}> {el.post}</span> 
                            <span className={classes.group}> {el.group}</span> 
                        </p>
                        <p>
                            <span className={classes.time}>{el.time}</span>
                        </p>
                    </div>
                </div>
            )
        }
    </div>
}