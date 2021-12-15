import React from 'react'

import classes from './TaskItem.module.css'

const TaskItem = props => {

    return (
        <li className={classes['task-item']}>
            <p className={classes['task-item__text']}>{props.text}</p>
            <div>
                <span className={classes['task-item__icon-wrapper']}>
                    <button className={`${classes['task-item__icon-success']} material-icons`}>check</button>
                    <button className={`${classes['task-item__icon-close']} material-icons`}>close</button>
                </span>
            </div>
        </li>
    )
}

export default TaskItem;