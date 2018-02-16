import { combineReducers } from 'redux';

import clientReducer from './clientReducer';
import inventoryReducer from './inventoryReducer';
import rentingReducer from './rentingReducer';

const skiShopApp = combineReducers({
    clientState: clientReducer,
    inventoryState: inventoryReducer,
    rentingState: rentingReducer,
});

export default skiShopApp;
