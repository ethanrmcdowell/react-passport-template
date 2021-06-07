import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  email: '',
  password: '',
  jwtToken: '',
  loggedIn: false,
  testWorks: false,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'userLogin':
      return {
        ...state,
        email: action.email,
        password: action.password,
        jwtToken: action.jwtToken,
        loggedIn: true,
      };
    case 'testRedux':
      return {
        ...state,
        testWorks: true,
      };
    default:
      return state;
  }
};

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(loginReducer, composedEnhancer);

export default store;
