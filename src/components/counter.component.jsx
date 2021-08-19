import React from 'react';
import CounterList from './counter-list.component';
import Reset from './reset.component';

const Counter = (props) => {
    
    return (
        <div className="d-flex flex-column align-items-center">
            <ul className="mt-4">
                {
                    props.counters.map((counter) => {
                        return (
                            <CounterList 
                                key={counter.id}
                                id={counter.id}
                                value={counter.value}
                                onIncrement={props.handleIncrement}
                                onDecrement={props.handleDecrement}
                                onDelete={props.handleDelete}
                            />
                        )
                    })
                }
            </ul>

            <Reset onReset={props.handleReset} />
        </div>
    );
};

export default Counter;