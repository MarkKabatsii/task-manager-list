import React, {useCallback, useEffect, useState} from 'react'
import {API_URL} from './config'
import useHttp from "./components/hooks/use-http";

import NewTask from "./components/NewTask/NewTask";
import Tasks from './components/Tasks/Tasks'

function App() {
    const [tasks, setTasks] = useState([]);

    const {sendRequest: fetchTasks, error, isLoading} = useHttp(
        useCallback((data) => {
            const loadedTasks = [];
            for (const dataKey in data) {
                loadedTasks.push({id: dataKey, text: data[dataKey].text})
            }
            setTasks(loadedTasks)
        }, [])
    )

    useEffect(() => {
        fetchTasks({url: API_URL})
    }, [fetchTasks])

    const addTaskHandler = useCallback(item => {
        setTasks(prevState => prevState.concat(item))
    }, [tasks])

    return (
        <React.Fragment>
            <NewTask onAddTask={addTaskHandler}/>
            <Tasks
                tasks={tasks}
                loading={isLoading}
                isLoading={isLoading}
                error={error}
                onFetchTask={fetchTasks}
            />
        </React.Fragment>
    )
}

export default App;
