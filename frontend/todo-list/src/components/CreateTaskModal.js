import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskModal = ({ modal, toggle, submitTask}) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    if(name === 'taskName') {
      setTaskName(value)
    } else {
      setDescription(value)
    }
  }

  const handleSaveTask = () => {
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = description;
    submitTask(taskObj);
  }
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Task Name</label>
            <input type="text" name="taskName" className="form-control" value={taskName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Task Description</label>
            <textarea name="taskDescription" id="" cols="30" rows="5" className="form-control" value={description} onChange={handleChange}></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={handleSaveTask}>Create</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  );
}

export default CreateTaskModal;