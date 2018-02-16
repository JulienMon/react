import React, { Fragment } from 'react';
import { connect } from 'react-redux';

function RentingDisplay(props) {
    return (
        <Fragment>
            <h2>Bookings</h2>
            <table>
                <thead>
                    <tr>
                        <th>Client</th>
                        <th>Model</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                    {props.rentings.map(renting => (
                        <tr key={renting.id}>
                            <td>{renting.name}</td>
                            <td>{renting.model}</td>
                            <td>{renting.start}</td>
                            <td>{renting.end}</td>
                            {/* <td><button>delete</button></td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    );
}

function mapStateToProp(applicationState) {
    const { clientState, rentingState, inventoryState } = applicationState;

    const clients = {};
    clientState.forEach(item => (clients[item.id] = item.name));

    const inventory = {};
    inventoryState.forEach(item => (inventory[item.id] = item.label));

    var newRentings = rentingState.map(item => {
        return {
            ...item,
            name: clients[item.clientId],
            model: inventory[item.inventoryId],
            //item.start,
            //item.end,
        };
    });

    return {
        rentings: newRentings,
    };
}

const ConnectedRentingDisplay = connect(mapStateToProp)(RentingDisplay);

export default ConnectedRentingDisplay;
