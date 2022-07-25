import { AuthBoardImage } from 'src/templates/UI/Auth'
import { AuthTemplate } from 'src/templates/Auth'
import { Login } from 'src/components/organisms/auth/Login'
import React from 'react'

export function LoginPage() {
  return (
    <AuthTemplate
      ImageComponent={AuthBoardImage}
      BusinessComponent={Login}
    />
  )
}
