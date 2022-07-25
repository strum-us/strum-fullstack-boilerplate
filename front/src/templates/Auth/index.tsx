import React from 'react'
import { themeState } from '../UI/recoil/theme'
import { useRecoilValue } from 'recoil'

export function AuthTemplate({
  ImageComponent,
  BusinessComponent,
}:{
  ImageComponent:() => JSX.Element,
  BusinessComponent:() => JSX.Element
}) {
  const theme = useRecoilValue(themeState)
  return (
    <div className={`relative flex flex-row spa ${theme} bg-color`}>
      <div className='w-1/2'>
        <ImageComponent />
      </div>
      <div className='flex items-center justify-center w-1/2 bg-color'>
        <BusinessComponent />
      </div>
    </div>
  )
}
