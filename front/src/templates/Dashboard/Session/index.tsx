import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

export function SessionTemplate() {
  const { sessionId } = useParams<{sessionId: string}>()
  const [session, setSession] = useState<any>()

  useEffect(() => {
    // fetch session
  }, [sessionId])

  return (
    <div>
      <div>
        session template
      </div>
    </div>
  )
}
