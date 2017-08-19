import React from 'react';

class CheckList extends React.Component{
  render(){
    const tasks=this.props.tasks.map((task)=>
      <li className="cheklist__task">
        <input type="checkbox" defaultChecked={task.done} />
        {task.name}
        <span className="checklist__task--remove" />
      </li>
    );

    return(
        <div className="checklist">
          <ul>{tasks}</ul>
        </div>
    );
  }
}

export default CheckList;
