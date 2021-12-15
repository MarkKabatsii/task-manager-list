import React from "react";

import TaskItem from './TaskItem/TaskItem'
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

import classes from './Tasks.module.css'

const Tasks = props => {

    let taskList = ''
    if (props.tasks.length > 0) {
        taskList = (
            <Card className={classes['task-wrapper']}>
                <ul className={classes['task-list']}>
                    {props.tasks.map(task => <TaskItem
                        key={task.id}
                        id={task.id}
                        text={task.text}
                    />)}
                </ul>
            </Card>
        )
    }
    if (props.error) {
        taskList = <Button onClick={props.onFetchTask}>Try again</Button>
    }

    if (props.isLoading) {
        taskList = <Card className={classes['task-wrapper']}><p>Loading tasks...</p></Card>
    }

    return (
        <>
            {taskList}
        </>

    )
}

export default Tasks;