import { combineReducers } from 'redux';
import TicketsReducer from './tickets/reducer';

const rootReducer = combineReducers({
    // key: value
    TicketsReducer: TicketsReducer
});

export default rootReducer;