import React from 'react';
import logo from './logo.svg';
import './App.css';
import { throwStatement } from '@babel/types';

class InputForm extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form>
        <input type="text" value={this.props.value} onChange={this.props.onChange} />
        <input type="submit" value="Add Item" onClick={this.props.onClick}/>
      </form>
    );
  }

}

function OutputList(props) {
  return (
    <ul>{ 
      props.items.map(
        (description, index) => <li key={index}>{description}</li>
      ) 
    }
    </ul>
  );
}

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      itemList: [],
      itemValue: '',
    };
    this.handleAddNewItem = this.handleAddNewItem.bind(this);
    this.handleItemInputChange = this.handleItemInputChange.bind(this);
  }

  handleAddNewItem(event) {
    event.preventDefault();
    const value = this.state.itemValue;
    if (value) {
      this.setState({
        itemList: this.state.itemList.concat(value),
        itemValue: ''
      });
    }
  }

  handleItemInputChange(event) {
    this.setState({itemValue: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Todo List
          </p>
          <InputForm value={this.state.itemValue} onChange={this.handleItemInputChange} onClick={this.handleAddNewItem} />
          <OutputList items={this.state.itemList} />
        </header>
      </div>
    );
  }

}

export default App;
