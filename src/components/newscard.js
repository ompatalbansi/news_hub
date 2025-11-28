import React, { Component } from 'react';

export default class Newscard extends Component {
  
  render() {
    let {discription,text,imageUrl} = this.props;
    return (
      <div>
            <div className="card" style={{width: "18rem"}}>
                <img src={imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{text}</h5>
                    <p className="card-text">{discription}</p>

                </div>
            </div>
                        
      </div>
    );
  }
}
