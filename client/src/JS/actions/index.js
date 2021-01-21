import axios from 'axios';
import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  REGISTER_USER,
  LOGIN_USER,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  GET_PROFILE,
  GET_PROFILE_FAIL,
  GET_PROFILE_SUCCESS,
} from '../constants/actions-types';

export const register = (newUser) => async (dispatch) => {
  dispatch({
    type: REGISTER_USER,
  });
  try {
    const addRes = await axios.post('/user/register', newUser);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: addRes.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      payload: error.response.data,
    });
  }
};

export const login = (cred) => async (dispatch) => {
  dispatch({
    type: LOGIN_USER,
  });
  try {
    const loginRes = await axios.post('/user/login', cred);
    localStorage.setItem('token', loginRes.data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: loginRes.data,
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      payload: error.response.data,
    });
  }
};

export const getProfile = () => async (dispatch) => {
  const token = localStorage.getItem('token');
  const config = {
    headers: {
      Authorization: token,
    },
  };
  dispatch({
    type: GET_PROFILE,
  });
  try {
    const isAuth = await axios.get('/user/current', config);
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: isAuth.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAIL,
      payload: error.response.data,
    });
  }
};
