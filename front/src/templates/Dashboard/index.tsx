import React, { useEffect, useState } from 'react'

import { ChattingTemplate } from './Chatting'
import { useLocation } from 'react-router-dom'

export function DashboardTemplate() {
  const location = useLocation()
  const [displayType, setDisplayType] = useState<string| null>(null) // 'session' | 'widget' | 'chatting' | 'overall' | null

  useEffect(() => {
    setDisplayType(location.pathname.split('/')[3] ? location.pathname.split('/')[3] : null)
  }, [location.pathname])

  console.log(displayType)

  return (
    <div className='flex flex-row'>
      <div className='w-48'>
        navigation
      </div>
      <div style={{ backgroundColor: 'yellowgreen' }} className='w-full h-screen'>
        {
          displayType === 'chatting' &&
          (
            <ChattingTemplate />
          )
        }
      </div>
    </div>
  )
}
