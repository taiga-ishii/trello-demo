import React from 'react';
import CheckList from './CheckList';

class Card extends React.Component{
    constructor(...args){
      super(...args);
      this.state=
        showDetails: false,
      };
    }

    render(){
      let cardDetails;
      if (this.state.showDetails){
        cardDetails=(
          <div className="card__details">
            {this.props.description}
            <CheckList cardId={this.props.id} tasks={this.props.tasks} />
          </div>
        );
      }
      return(
        <div className="card">
          <div
            className="card__title"
            onClick={()=> this.setState({ showDetails: !this.state.showDetails})}
            role="presentation"
            >
            {this.props.title}
          </div>
      );
    }
}
export default Card;
