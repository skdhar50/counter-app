import React from 'react';
import Button from 'react-bootstrap/Button';

const Reset = (props) => {
    return (
        <Button
            variant="primary"
            onClick={() => props.onReset()}
        >
            Reset
        </Button>
    );
}

export default Reset;