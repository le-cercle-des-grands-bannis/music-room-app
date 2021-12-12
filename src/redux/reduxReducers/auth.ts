import {
  REQUEST_USER_START,
  SIGN_IN_USER_SUCCESS,
  SIGN_IN_USER_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  SIGN_UP_USER_SUCCESS,
  SIGN_UP_USER_FAILURE,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  USER_CLEAR_ERROR,
} from '../reduxActionTypes/auth';

const initialState = {
  user: {},
  token: '',
  isFetching: false,
  error: false,
  message: '',
};

export default function auth(
  state = initialState,
  action: {type: any; user: {token: string}; error: boolean; message: ''},
) {
  switch (action.type) {
    case REQUEST_USER_START:
      return {
        ...state,
        isFetching: true,
        error: false,
        message: '',
      };
    case SIGN_IN_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.user,
        token: action.user.token,
        error: false,
      };
    case SIGN_IN_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error || true,
        user: {},
      };
    case SIGN_UP_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.user,
        token: action.user.token,
        error: false,
      };
    case SIGN_UP_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        user: {},
        error: action.error || true,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        user: action.user,
        token: action.user.token,
        message: action.message,
        error: false,
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error || true,
      };
    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: false,
        token: '',
        user: {},
      };
    case LOGOUT_USER_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error || true,
      };
    case USER_CLEAR_ERROR:
      return {
        ...state,
        error: false,
        message: '',
      };
    default:
      return state;
  }
}
