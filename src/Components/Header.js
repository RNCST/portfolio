import {Component} from 'react'

export default class Header extends Component{
   render() {
      console.log('Header Render ');
      return(
         <h1>{this.props.test}Header Text</h1>
      );
   }
}