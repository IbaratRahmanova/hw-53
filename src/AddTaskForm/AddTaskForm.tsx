import React from 'react';

const AddTaskForm = () => {
  return (
    <div>
      <form name="newform">
        <label htmlFor="newitem">Add to the todo list</label>
        <input type="text" name="newitem" id="newitem"/>
          <button type="submit">Add item</button>
      </form>
    </div>
  );
};

export default AddTaskForm;