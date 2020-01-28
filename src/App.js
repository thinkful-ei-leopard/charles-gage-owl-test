import React, { Component } from 'react';
import './App.css';
import List from './List';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };
  render() {
    const { participants } = this.props
    return (
      <main className='App'>
        <div className='session'>
          <List
              props={participants}
            />  
          {/* stage */}
          {/* control bar */}
        </div>
      </main>
    )
  }
};

export default App;
