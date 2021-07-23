import { createStore } from 'redux';
import reducers from './reducer/index';
const Store = createStore(reducers, {});
export default Store;
