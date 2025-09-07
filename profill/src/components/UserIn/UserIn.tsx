'use client'
import React, { useState } from 'react'
import SignIn from './signIn';
import Signup from './signup';

const UserIn = () => {
  const [isSignup, isSetSignup] = useState(false);
  const [isSignIn, isSetSignIn] = useState(false);

  return (
    <div className='w-full h-full flex justify-around'>
      <div>isSignup
        {isSignup? isSignup &&
        <div className='flex-col'>
          <Signup />
          <button onClick={() => isSetSignup(false)} className='hover:bg-gray-400'>戻る</button>
        </div>
        :!isSignup && <button onClick={() => isSetSignup(true)}  className='hover:bg-gray-400'>signIn</button>}
      </div>
      <div>
        {isSignIn? isSignIn &&
        <div className='flex-col'>
          <SignIn />
          <button onClick={() => isSetSignIn(false)}  className='hover:bg-gray-400'>戻る</button>
        </div>
        :!isSignIn && <button onClick={() => isSetSignIn(true)}  className='hover:bg-gray-400'>signIn</button>}
      </div>
    </div>
  )
}

export default UserIn