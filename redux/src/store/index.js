import {createStore, combineReducers} from 'redux'
import serviceListReducer from '../reducers/serviceList'
import serviceAddReducer from '../reducers/serviceAdd'
import checkingEditReducer from '../reducers/checkingEdit'
import filterFieldReducer  from '../reducers/filterField'

const reducers = combineReducers({
  serviceAdd: serviceAddReducer,
  serviceList: serviceListReducer,
  checkingEdit: checkingEditReducer,
  filterField: filterFieldReducer
})

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
export default store;