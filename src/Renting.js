import React, { Fragment } from 'react';


import { connect } from 'react-redux';

import ConnectedRentingForm from './ConnectedRentingForm';
import ConnectedRentingDisplay from './ConnectedRentingDisplay';

import { loadRenting } from './rentingActions';

function Renting(props) {
    return (
        <Fragment>
            <button onClick={() => props.dispatch(loadRenting())}>Load rentings</button>
            <hr/>
            <ConnectedRentingForm />
            <hr />
            <ConnectedRentingDisplay />
        </Fragment>
    );
}

const ConnectedRenting = connect()(Renting);

export default ConnectedRenting;