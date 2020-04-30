import React, { Component} from 'react';
import './App.css';
import { DISHES } from './shared/DishData'
import { Navbar, NavbarBrand } from 'reactstrap';
import MenuBar from './Component/MenuBar';
class App extends Component {

  constructor(props){
    super(props);
    this.state= {
      dishes : DISHES
    }
  }
  render() {

    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Tara's Kitchen</NavbarBrand>
          </div>
        </Navbar>
        <MenuBar dishes={ this.state.dishes }/>
      </div>
    );
  }
}

export default App;
