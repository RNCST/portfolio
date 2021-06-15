import React, { Component } from 'react';
import Book from './book';

class Books extends Component {
  state = {
    books: [
      { id: 1, name: 'HTML', count: 0 },
      { id: 2, name: 'JAVA', count: 0 },
      { id: 3, name: 'SPRING', count: 0 },
    ],
  };

  eventIncrement = book => {
    console.log(`eventIncrement ${book.name}`);
    const books = [...this.state.books];
    const index = books.indexOf(book);
    books[index].count++;
    this.setState({ books })
    // book.count++;
    // this.setState(this.state);
  }
  /*
    새로운 도서정보가 입력되면 항상 복사해 와야 한다.
    books이라는 새로운 배열을 만들건데 우선 기존에 있는 state에 books를 하나하나씩.
    이것은 apread syntax라고 하는데 이렇게 하게 되면 이 bookx에 있는 아이템들을 
    하나씩 새로운 배열에 복사해 오는 것임.
    이렇게 각각에 있는 걸 복사해 오고 주어진 이름을 이용해서 새로운 book도 만들어야 됩니다.
    그래서 아이디는 고유한 아이들을 써야 한다. 
  */
  eventDecrement = book => {
    console.log(`eventDecrement ${book.name}`);
    const books = [...this.state.books];
    const index = books.indexOf(book);
    const count = books[index].count -1;
    // books[index].count--;
    books[index].count = count < 0 ? 0 : count;
    this.setState({ books })
    // book.count--;
    // this.setState({ count: count < 0 ? 0 : count});
    // this.setState(this.state);
  }
  eventDelete = book => {
    console.log(`eventDelete ${book.name}`);
    // console.log(`eventDecrement ${book.name}`);
    const books = [...this.state.books];
    const index = books.indexOf(book);
    books[index].count = 0;
    this.setState({ books })
    // book.count = 0;
    // this.setState(this.state);
  }
  render() {
    return (
      <ul>
        {
          this.state.books.map(book => (
            <Book
              key={book.id}
              book={book}
              onIncrement={this.eventIncrement}
              onDecrement={this.eventDecrement}
              onDelete={this.eventDelete}
            />
          ))
        }
      </ul>
    );
  }
}
export default Books;

