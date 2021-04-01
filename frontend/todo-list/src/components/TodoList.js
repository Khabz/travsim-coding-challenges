import React, { useState } from 'react';
import CreateTaskModal from './CreateTaskModal';

const TaskList = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    const toggle = () => setModal(!modal);

    const saveTask = (taskObj) => {
        let tempList = taskList;
        tempList.push(taskObj);
        setTaskList(tempList);
        setModal(false)
    };
    return (
        <>
            <div className="header__container text-center">
                <h3>Todo Appliation</h3>
                <p>Manage your task</p>
                <button onClick={() => setModal(true)} className="btn btn-sm btn-success">Create Task</button>
            </div>
            <div className="task__container">
                {taskList.map((obj) => <li>{obj.Name}</li>)}
            </div>
            <CreateTaskModal toggle={toggle} modal={modal} submitTask={saveTask}/>
        </>
    )
}

export default TaskList;



