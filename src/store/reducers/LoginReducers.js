import { USER_SIGNUP, USER_LOGIN} from '../actions/Types';

const INITIAL_STATE = {
  username:'',
  password:'',
  email:'',
};

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case USER_SIGNUP:
      return action.payload || state;
    case USER_LOGIN:
      return action.payload || state;
    default:
      return state;
  }
}