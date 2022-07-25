import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

export function Session() {
  const { sessionId } = useParams<{sessionId:string}>()
  const [session, setSession] = useState<any>({
    sessionType: 'chatting',
  })

  useEffect(() => {
    // fetch widget Information
  }, [sessionId])

  return (
    <div>
      session
    </div>
  )
}
