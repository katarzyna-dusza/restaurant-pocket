import { combineReducers } from 'redux';

export const address = (state = '', action) => {
    switch (action.type) {
        case 'ADDRESS_SET':
            return action.address;
        default:
            return state;
    }
};

export const getAddress = (state) => {
    return state.address;
};

const reducers = combineReducers({
    address
});

export default reducers;
