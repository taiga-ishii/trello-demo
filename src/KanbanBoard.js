import React from 'react';
import List from './List';

class KanbanBoard extends React.Component{
  render(){
    return(
      <div className="app">
        <List
          id="todo"
          title="ToDo"
          cards={
            this.props.cards.filter((card) => card.status === 'todo')
          }
        />
        <List
          id="in-progress"
          title="in-progress"
          cards={
            this.props.cards.filter((card) => card.status === 'in-progress')
          }
        />
        <List
          id="done"
          title="done"
          cards={
            this.props.cards.filter((card) => card.status === 'done')
          }
        />
    </div>
  );
  }
}
export default KanbanBoard;
