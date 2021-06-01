import React, { Component } from 'react';


class Book extends Component {
   state = {
      count: 0,
   };
   eventIncrement = (event) => {
      console.log(event);
      //this.state.count++;
      this.setState({ count: this.state.count + 1 })
   }
   eventDecrement = (event) => {
      console.log(event);
      this.setState({ count: this.state.count - 1 })
   }
   render() {
      return (
         <li className="book">
            <span className="book-name">자바프로그래밍</span>
            <span className="book-count">{this.state.count}</span>
            <button className="book-button book-increase" onClick={this.eventIncrement}>
               <i className="fas fa-plus"></i>
            </button>
            <button className="book-button book-decrease" onClick={this.eventDecrement}>
               <i className="fas fa-minus"></i>
            </button>
         </li>
      )
   }
};

export default Book;