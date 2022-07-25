import * as Yup from 'yup'

// import { Contact, ContactInput, GoogleSignInOptions, Query, QueryUserDetailArgs, SingInUserOptions, User, UserInput } from '../../graphql-types'
import { LoaderIcon, LocalToken } from '@strum/common'
import React, { useEffect, useState } from 'react'

import { ApolloQueryResult } from '@apollo/client'
import { Input } from 'src/components/modules/Input'

// import { AuthDisplayErrorMessage } from '.'
// import { Button } from '@components/Button'
// import { GoogleLoginContainer } from './GoogleLoginContainer'
// import { initializeTokenLink } from '../../middlewares/apollo'

export function Login() {
  return (
    <div className='w-96' style={{ backgroundColor: 'yellowgreen' }}>
      <div className='flex flex-col space-y-5 modal-body-header'>
        {/* <LogoIcon></LogoIcon> */}
        <div className='typo-headtitle '>
            Log in
        </div>
      </div>

      <div className='flex flex-col space-y-6' >
        <div className='flex flex-col space-y-2'>
          <Input
            label='Email'
            type='text'
            value={'1234@5678.com'}
            placeholder='Enter Email'
            onChange={() => {}}
            error={'error message'}
            id='email'
            footerArea={true}
            autoFocus={true}
          />
          <Input
            label='Password'
            type='password'
            value={'1234@5678.com'}
            placeholder='Enter Email'
            onChange={() => {}}
            error={'error message'}
            id='password'
            footerArea={true}
            autoFocus={true}
          />
        </div>

        <div className='flex flex-row w-full place-items-start place-content-end'>
          <div
            className='sm text-primary info-link'
            // onClick={handleForgotPassword}
          >
              Forgot password
          </div>
        </div>
        {/* <Button
          onClick={() => {
            if (!disabled && !loading) handleSubmit()
          }}
          type='solid'
          disabled={disabled}
          size='wide lg'>{loading ? <LoaderIcon size={16} /> : 'Login'}</Button> */}
        <div className='w-full space-x-2 flex-row-center'>
          <div className='w-full border border-gray-300'></div>
          <div className='text-gray-400 typo-small'>or</div>
          <div className='w-full border border-gray-300'></div>
        </div>
        {/* <GoogleLoginContainer
          googleSignIn={googleSignIn}
          setAuthenticated={setAuthenticated}
          createContact={createContact}
          refetchUser={refetchUser}
        /> */}
        <div className='flex flex-col space-y-7'>
          <div className='flex flex-row space-x-1 text-gray-500 typo-body'>
            <div>Not registered yet?</div>
            <div
              className='info-link text-primary sm'
              // onClick={() => {
              //   handleHistoryPush('/register')
              // }}
            >Create an Account</div>
          </div>
        </div>
      </div>
    </div >
  )
}
