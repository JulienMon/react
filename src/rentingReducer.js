import { CREATE_RENTING, LOAD_RENTING } from './rentingActions';

export default (previousState = [], action) => {
    switch (action.type) {
        case CREATE_RENTING:
            return previousState.concat(action.payload);
        case LOAD_RENTING:
            return action.payload.rentings
        default:
            return previousState;
    }
};

