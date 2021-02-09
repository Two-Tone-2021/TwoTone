import { combineReducers } from 'redux';

// import all reducers here
import reducer from './reducer';

// combine reducers
const reducers = combineReducers( {reducer});

// make the combined reducers available for import
export default reducers;