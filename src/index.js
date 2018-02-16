import './index.css';

import clients from './clients.json';
import inventory from './inventory.json';
//import renting from './renting.json';

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';

import skiShopApp from './skiShopApp';
//import Renting from './Renting';
import ConnectedRenting from './Renting';

const initialStore = {
    clientState: clients,
    inventoryState: inventory,
    //rentingState: renting,
};

let currentStore = createStore(
    skiShopApp,
    initialStore,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={currentStore}>
        <ConnectedRenting />
    </Provider>,
    document.getElementById('root')
);
