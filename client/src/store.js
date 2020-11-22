// redux thunk is used so we can do async functions in our reducers
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// combine all our reducers
const reducer = combineReducers({})

// initial our initial state
const initialState = {}

const middleware = [thunk]

// create our store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools([...middleware])
)

export default store
