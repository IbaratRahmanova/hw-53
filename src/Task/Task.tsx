import React from 'react';
import Icon from "@mui/material/Icon";

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
          <span className="label">{props.id}</span>
          <div className="actions">
            <button className="btn-picto" type="button">
              <i aria-hidden="true" className="material-icons"></i>
            </button>
            <button onClick={props.onDeleteTask} className="btn-picto" type="button" aria-label="Delete"
                    title="Delete">
              <Icon>delete</Icon>
            </button>
          </div>
        </li>
      </template>
      <p className="emptylist">{props.text} <Icon onClick={props.onDeleteTask}>delete</Icon></p>

    </div>
  );
};
export default Task;