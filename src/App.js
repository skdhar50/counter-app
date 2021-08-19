import { React, Component } from 'react';
import Counter from './components/counter.component';
import Navbar from './components/navbar.component';


class App extends Component {
	render() {
    return (
      <div className="App">
        <Navbar />
        <Counter />
      </div>
    );
  }
}

export default App;
