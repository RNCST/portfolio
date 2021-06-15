import React, { Component } from 'react';

class Book extends Component {
  eventIncrement = () => {
    this.props.onIncrement(this.props.book);
  }
  eventDecrement = () => {
    this.props.onDecrement(this.props.book);
  }
  eventDelete = () => {
    this.props.onDelete(this.props.book);
  }
  render() {
    //console.log(this.props.book);
    const { name, count } = this.props.book;
    return (
      <li className="book">
        <span className="book-name">{name}</span>
        <span className="book-count">{count}</span>
        <button className="book-button book-increase" onClick={this.eventIncrement}>
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="book-button book-decrease" onClick={this.eventDecrement}>
          <i className="fas fa-minus-square"></i>
        </button>
        <button className="book-button book-zero" onClick={this.eventDelete}>
          <i className="fas fa-trash-alt"></i>
        </button>
      </li>
    );
  }
}

export default Book;