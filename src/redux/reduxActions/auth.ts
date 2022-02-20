import AsyncStorage from '@react-native-async-storage/async-storage';

import { USER } from '../../helpers/interfaces/user';
import {
  REQUEST_USER_START,
  SIGN_IN_USER_SUCCESS,
  SIGN_IN_USER_FAILURE,
  SIGN_UP_USER_SUCCESS,
  SIGN_UP_USER_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  USER_CLEAR_ERROR,
} from '../reduxActionTypes/auth';
import {
  userFetch,
  userLogin,
  userLogout,
  userUpdate,
  userRegister,
} from '../reduxServices/auth';

export const fetchUserAction = (navigation: {
  replace: (arg0: string) => void;
}) => {
  return async (
    dispatch: (arg0: { type: string; user?: any; error?: any }) => void,
  ) => {
    const token = await AsyncStorage.getItem('TOKEN');
    if (token) {
      dispatch({
        type: REQUEST_USER_START,
      });
      userFetch()
        .then(response => {
          if (response.success) {
            AsyncStorage.setItem('TOKEN', JSON.stringify(response.user.token));
            dispatch({
              type: SIGN_IN_USER_SUCCESS,
              user: response.user,
            });
            navigation.replace('Menu');
          } else {
            dispatch({
              type: SIGN_IN_USER_FAILURE,
              error: response,
            });
            navigation.replace('Auth');
          }
        })
        .catch(error => {
          dispatch({
            type: SIGN_IN_USER_FAILURE,
            error,
          });
          navigation.replace('Auth');
        });
    } else {
      navigation.replace('Auth');
    }
  };
};

export const loginUserAction = (
  email: string,
  password: string,
  navigation: any,
  onError: any,
) => {
  return (
    dispatch: (arg0: { type: string; user?: any; error?: any }) => void,
  ) => {
    dispatch({
      type: REQUEST_USER_START,
    });
    userLogin(email, password)
      .then(response => {
        if (response.success) {
          AsyncStorage.setItem('TOKEN', JSON.stringify(response.user.token));
          dispatch({
            type: SIGN_IN_USER_SUCCESS,
            user: response.user,
          });
          navigation.replace('Menu');
        } else {
          dispatch({
            type: SIGN_IN_USER_FAILURE,
            error: response,
          });
          onError();
        }
      })
      .catch(error => {
        dispatch({
          type: SIGN_IN_USER_FAILURE,
          error,
        });
        onError();
      });
  };
};

export const registerUserAction = (
  user: USER,
  navigation: any,
  onError: any,
) => {
  return (
    dispatch: (arg0: { type: string; user?: any; error?: any }) => void,
  ) => {
    dispatch({
      type: REQUEST_USER_START,
    });
    userRegister(user)
      .then(response => {
        if (response.success) {
          AsyncStorage.setItem('TOKEN', JSON.stringify(response.user.token));
          dispatch({
            type: SIGN_UP_USER_SUCCESS,
            user: response.user,
          });
          navigation.replace('Menu');
        } else {
          dispatch({
            type: SIGN_UP_USER_FAILURE,
            error: response,
          });
          onError();
        }
      })
      .catch(error => {
        dispatch({
          type: SIGN_UP_USER_FAILURE,
          error,
        });
        onError();
      });
  };
};

export const updateUserAction = (user: USER, onMount: any) => {
  return (
    dispatch: (arg0: {
      type: string;
      user?: any;
      message?: any;
      error?: any;
    }) => void,
  ) => {
    dispatch({
      type: REQUEST_USER_START,
    });
    userUpdate(user)
      .then(response => {
        if (response.success) {
          dispatch({
            type: UPDATE_USER_SUCCESS,
            user: response.user,
            message: response.message,
          });
          onMount();
        } else {
          dispatch({
            type: UPDATE_USER_FAILURE,
            error: response,
          });
          onMount();
        }
      })
      .catch(error => {
        dispatch({
          type: UPDATE_USER_FAILURE,
          error,
        });
        onMount();
      });
  };
};

export const logoutUserAction = (navigation: any) => {
  return (dispatch: (arg0: { type: string; error?: any }) => void) => {
    dispatch({
      type: REQUEST_USER_START,
    });
    userLogout()
      .then(async response => {
        if (response.success) {
          dispatch({
            type: LOGOUT_USER_SUCCESS,
          });
          await AsyncStorage.removeItem('TOKEN');
          navigation.replace('Auth');
        } else {
          dispatch({
            type: LOGOUT_USER_FAILURE,
            error: response,
          });
        }
      })
      .catch(error => {
        dispatch({
          type: LOGOUT_USER_FAILURE,
          error,
        });
      });
  };
};

export const clearUserErrors = () => {
  return (dispatch: (arg0: { type: string }) => void) => {
    dispatch({
      type: USER_CLEAR_ERROR,
    });
  };
};
