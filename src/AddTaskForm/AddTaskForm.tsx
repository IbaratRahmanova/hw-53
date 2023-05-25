import React from 'react';

interface IAddTaskFormProps extends React.PropsWithChildren {
  taskText: string;
  onChangeTask: React.ChangeEventHandler<HTMLInputElement>;
  onHandleAddTask: React.FormEventHandler;
}

const AddTaskForm: React.FC<IAddTaskFormProps> = props => {
  return (
    <div>
      <form onSubmit={props.onHandleAddTask} name="newform">
        <label>Add to the todo list</label>
        <input
          type="text"
          name="newitem"
          value={props.taskText}
          onChange={props.onChangeTask}
          id="newitem"/>
          <button type="submit">Add item</button>
      </form>
    </div>
  );
};

export default AddTaskForm;