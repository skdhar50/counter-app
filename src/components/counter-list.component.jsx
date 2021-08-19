import React from 'react';
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

// Settting up some custom styling
const classes = {
    custom: {
        marginLeft: "15px",
        fontSize: "20px"
    },
    myBadge: {
        padding: "10px",
        fontSize: "20px"
    }
}

const CounterList = (props) => {
    return (
        <li className = "list-unstyled p-2">
            <Badge bg = "primary" style={ classes.myBadge }>
                {props.value}
            </Badge>

            <Button
                variant = "warning"
                style = {classes.custom}
                onClick = {() => props.onIncrement(props.id)}
            >
                +
            </Button>
            <Button
                variant="warning"
                style = {classes.custom}
                onClick = {() => props.onDecrement(props.id)}
                disabled = {props.value === 0 ? true : false}
            >
                -
            </Button>
            <Button
                variant = "danger"
                style = {classes.custom}
                onClick = {() => props.onDelete(props.id)}
            >
                Delete
            </Button>
        </li>
    );
}

export default CounterList;