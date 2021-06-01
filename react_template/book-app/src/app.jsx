import './app.css';
import React from 'react';
import Book from './components/book';


function App() {
  return <Book />
}

// function App() {
//   const title = '스프링';
//   const msg = '여기에 자바스크립트를 작성할 수 있다';
//   const col1 = '';
//   const col2 = '';
//   const row11 = '00001';
//   const row12 = '글제목1';;

//   const colmap = new Map()
//   colmap.set(col1, '글번호')
//   colmap.set(col2, '글제목')


//   return (
//     <div>
//       <h1>Hello React!!! {title} </h1>
//       <h2>쉽게 배우는 JSP </h2>
//       {
//         <img src='img_avatar1.png' width='160px' height='200px' />

//       }
//       <br></br>
//       {
//         msg
//       }
//       <br></br>
//       {
//         <table border='1' borderColor='green'>
//           <tr><th>{colmap.get(col1)}</th><th>{colmap.get(col2)}</th></tr>
//           <tr><td>{row11}</td><td>{row12}</td></tr>
//         </table>
//       }
//       {
//         ['🛑', '🛑']
//       }
//       {
//         ['🛑', '🛑'].map(item => (
//           <h1>{item}</h1>
//         ))
//       }
//       <h3> h3 </h3>
//       <h4> h4 </h4>
//     </div >
//   );
// }



// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: this.getData()
//     }
//   }
//   getData() {
//     return 'Hello react';
//   }
// }

export default App;
