import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../JS/actions';

const Profile = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const user = useSelector((state) => state.userReducer.user);
  const loading = useSelector((state) => state.userReducer.loading);
  useEffect(() => {
    dispatch(getProfile());
  }, []); // eslint-disable-line
  return loading ? (
    <h1>Loading...</h1>
  ) : !isAuth ? (
    <Redirect to='/login' />
  ) : (
    <div>
      <pre>{JSON.stringify(user)}</pre>
    </div>
  );
};

export default Profile;
