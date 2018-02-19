import { USER_LOGIN, USER_SIGNUP} from './Types';

const userLogin = payload => {
  return {
    type: USER_LOGIN,
    payload
  }
};

const userSignup = payload => {
  return {
    type: USER_SIGNUP,
    payload
  }
};

export {
  userLogin,
  userSignup
}