import {React, Component} from 'react';
import Button from "react-bootstrap/Button";
import CounterList from './counter-list.component';

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

class Counter extends Component {
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

    render() {
        return (
            <div className="d-flex flex-column align-items-center">
                <ul className="mt-4">
                    {
                        this.state.counters.map((counter) => {
                            return (
                                <CounterList 
                                    key={counter.id}
                                    id={counter.id}
                                    value={counter.value}
                                    onIncrement={this.handleIncrement}
                                    onDecrement={this.handleDecrement}
                                    onDelete={this.handleDelete}
                                />
                            )
                        })
                    }
                </ul>

                <Button
                    variant="primary"
                    onClick={this.handleReset}
                >
                    Reset
                </Button>
            </div>
        );
    }
};

export default Counter;