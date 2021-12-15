import React, {useCallback, useState} from "react";
import {API_URL} from '../../config'
import useHttp from "../hooks/use-http";

import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import classes from './NewTask.module.css'

const NewTask = ({onAddTask}) => {
    const [enteredValue, setEnteredValue] = useState('')
    const {sendRequest} = useHttp(
        useCallback(data => {
            const generatedId = data.name;
            onAddTask({id: generatedId, text: enteredValue})
        }, [onAddTask, enteredValue]))

    const enterTaskHandler = (e) => {
        e.preventDefault();

        if (enteredValue.length > 0) {
            sendRequest({
                url: API_URL,
                method: 'POST',
                body: {text: enteredValue},
                headers: {'Content-Type': 'application/json'},
            })
        }
        setEnteredValue('')
    }

    return (
        <Card className={classes['form-wrapper']}>
            <form className={classes.form} onSubmit={enterTaskHandler}>
                <div>
                    <label htmlFor="new-task"/>
                    <input
                        className={classes['new-task']}
                        id='new-task'
                        type="text"
                        value={enteredValue}
                        onChange={event => setEnteredValue(event.target.value)}
                        placeholder='Enter your todo list'/>
                </div>
                <Button type='submit'>Add Task</Button>
            </form>
        </Card>
    )
}

export default NewTask;