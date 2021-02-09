
import { createStore } from 'redux'
import reducers from './reducers/index';


// we are adding composeWithDevTools here to get easy access to the Redux dev tools
// Create initial store with this function 
const store = createStore(
  reducers,
  
);

export default store;