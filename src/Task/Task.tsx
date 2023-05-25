import React from 'react';

interface ITaskProps {
  id: string;
  text: string;
  onDeleteTask: React.MouseEventHandler;
}

const Task: React.FC<ITaskProps> = props => {
  return (
    <div>
      <template>
        <li>
          <span className="label"></span>
          <div className="actions">
            <button className="btn-picto" type="button">
              <i aria-hidden="true" className="material-icons"></i>
            </button>
            <button onClick={props.onDeleteTask} className="btn-picto" type="button" aria-label="Delete"
                    title="Delete">
              <i aria-hidden="true" className="material-icons">delete</i>
            </button>
          </div>
        </li>
      </template>
      <p className="emptylist">{props.text}</p>
    </div>
  );
};

export default Task;