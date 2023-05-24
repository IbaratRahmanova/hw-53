import React from 'react';

const Task = () => {
  return (
    <div>
      <template>
        <li>
          <span className="label"></span>
          <div className="actions">
            <button className="btn-picto" type="button">
              <i aria-hidden="true" className="material-icons"></i>
            </button>
            <button className="btn-picto" type="button" aria-label="Delete"
                    title="Delete">
              <i aria-hidden="true" className="material-icons">delete</i>
            </button>
          </div>
        </li>
      </template>
      <p className="emptylist">Your todo list is empty.</p>
    </div>
  );
};

export default Task;