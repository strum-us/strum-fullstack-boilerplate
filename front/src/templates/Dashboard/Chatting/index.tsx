import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

export function ChattingTemplate() {
  const { chattingRoomId } = useParams<{chattingRoomId: string}>()

  useEffect(() => {
    // fetch chattingRoom
  }, [chattingRoomId])

  return (
    <div>
      <div>
      chattingRoomId template
      </div>
    </div>
  )
}
