import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { register } from '../JS/actions/index';

const Signup = () => {
  const loading = useSelector((state) => state.userReducer.loading);
  const user = useSelector((state) => state.userReducer.user);
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const addUser = (e) => {
    e.preventDefault();
    dispatch(
      register({
        name,
        email,
        password,
        phoneNumber,
      })
    );
  };
  return (
    <div className='Container'>
      {loading ? (
        <h1> please wait ...</h1>
      ) : user ? (
        <Redirect to='/login' />
      ) : (
        <div className='col-md-8 offset-md-2'>
          <div className='row'>
            <h1>Please fill the form </h1>
          </div>
          <div className='row mt-3'>
            <input
              type='text'
              name='name'
              onChange={(e) => setName(e.target.value)}
              placeholder='name'
              className='form-control'
            />
          </div>
          <div className='row mt-3'>
            <input
              type='email'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
              placeholder='email'
              className='form-control'
            />
          </div>
          <div className='row mt-3'>
            <input
              type='password'
              name='password'
              onChange={(e) => setPassword(e.target.value)}
              placeholder='password'
              className='form-control'
            />
          </div>
          <div className='row mt-3'>
            <input
              type='text'
              name='phoneNumber'
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder='phone number'
              className='form-control'
            />
          </div>
          <div className='row mt-3'>
            <button
              type='submit'
              className='btn btn-primary '
              onClick={addUser}
            >
              submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
