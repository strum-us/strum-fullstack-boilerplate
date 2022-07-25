import BackgroundDarkImage from '@assets/background/BackgroundDark.jpg'
import BackgroundLightImage from '@assets/background/BackgroundLight.svg'
import DashboardImage from '@assets/images/dashboard.png'
import React from 'react'
import { SVGLogoWithText } from '@assets/images/wedesk'
// import { getTheme } from '@middlewares/util'

const getTheme = ():'dark' => 'dark'

export function AuthBoardImage() {
  return (
    <div
      className='justify-center h-screen overflow-hidden'
      style={{
        position: 'relative',
        backgroundImage: getTheme() === 'dark' ? `url(${BackgroundDarkImage})` : `url(${BackgroundLightImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
      <div
        className='flex flex-col justify-between ml-28 '
        style={{ overflow: 'hidden' }}>
        <div className='h-32'>
          <SVGLogoWithText className='object-cover w-48 select-none' type={getTheme()} />
          <div className='mt-6 text-white typo-subtitle' style={{ minWidth: '300px' }}>
                Manage private to-do, teams tasks, outsourcing projects in one place
          </div>
        </div>
        <div style={{ height: '35vw', marginLeft: '-1vw' }}>
          <img
            className='absolute object-cover select-none'
            style={{ minWidth: '50vw' }}
            src={DashboardImage}
            alt='Auth Image'
          />
        </div>
      </div>
    </div>
  )
}
