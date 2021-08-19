import { React, Component } from 'react';
import Counter from './components/counter.component';
import Navbar from './components/navbar.component';

// Initial values for our state
const INITIAL_STATE = [
  {id: 0, value: 0},
  {id: 1, value: 0},
  {id: 2, value: 0},
  {id: 3, value: 0},
  {id: 4, value: 0}
]

// Function to travers the counters state
function traverseStateCounters(state, id, type) {
  const counter = state.map(counter => {
      if( counter.id === id ) {
          // Handles the increment, decrement and delete operations
          switch( type ) {
              case 'INCREMENT':
                  return { id: id, value: counter.value + 1 };
              case 'DECREMENT':
                  return { id: id, value: counter.value - 1 };
              case 'DELETE':
                  return { id: id, value: 0 };
              default:
                  return counter;
          }
      }
      else
          return counter;
  });

  return counter;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      counters: INITIAL_STATE
    }
  }

  // Resetting to the initial state
  handleReset = () => {
      this.setState({ counters: INITIAL_STATE });
  }

  // Function to handle the increment 
  handleIncrement = (id) => {
      this.setState({
          counters: traverseStateCounters(this.state.counters, id, "INCREMENT")
      });
  }

  // Function to handle the decrement
  handleDecrement = (id) => {
      this.setState({
          counters: traverseStateCounters(this.state.counters, id, "DECREMENT")
      });
  }

  // Function to handle the delete
  handleDelete = (id) => {
      this.setState({
          counters: traverseStateCounters(this.state.counters, id, "DELETE")
      });
  }

  // Function to count non-zero elements
  countNonzeroCounters = () => {
    let cnt = 0;
    this.state.counters.forEach((counter) => {
      if( counter.value > 0 )
        cnt++;
    })

    return cnt;
  }

	render() {
    return (
      <div className="App">
        <Navbar nonZeroInputs={this.countNonzeroCounters()} />
        <Counter
            counters={this.state.counters}
            handleIncrement={this.handleIncrement}
            handleDecrement={this.handleDecrement}
            handleDelete={this.handleDelete}
            handleReset={this.handleReset}
        />
      </div>
    );
  }
}

export default App;
