import { Component } from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import SideBar from './Components/SideBar';

import './App.css';


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      selectItem: "0",
      Header: [
        { id: 1, name: 'Header1', content: 'HeaderContent1' },
        { id: 2, name: 'Header1', content: 'HeaderContent2' },
        { id: 3, name: 'Header1', content: 'HeaderContent3' },
      ],
      Main: [
        { id: 1, name: 'Main1', content: 'MainrContent1' },
        { id: 2, name: 'Main1', content: 'MainContent2' },
        { id: 3, name: 'Main1', content: 'MainContent3' },
      ],
      SideBar: [
        { id: 1, name: 'SideBar', content: 'SideBarContent1' },
        { id: 2, name: 'SideBar', content: 'SideBarContent2' },
        { id: 3, name: 'SideBar', content: 'SideBarContent3' },
      ],
      Footer: [
        { id: 1, name: 'Footer', content: 'FooterContent1' },
        { id: 2, name: 'Footer', content: 'FooterContent2' },
        { id: 3, name: 'Footer', content: 'FooterContent3' },
      ]
    }

  }

  render() {
    console.log('App render');
    let selectedItem = this.props.selectItem;
    switch (seleectedItem){
      case(0):{

        break;
      };
      case(1):{

        break;
      } 
      case(3):{

        break;
      }
      default:{
        return;
      }

    }

    return (
      <div className='App'>
        <Header>


        </Header>


        <Main>
          <SideBar>


          </SideBar>
        </Main>

        <Footer>


        </Footer>

      </div>
    );
  }
}



export default App;


