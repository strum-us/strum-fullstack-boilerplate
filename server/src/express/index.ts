import { Express } from 'express'
import { sendPublishMail } from './email'
import { tokenSignin } from './account/tokenAuth'

export function initApis(app: Express) {
  app.post('/account/tokenSignin', tokenSignin)
  app.post('/mail/sendPublishMail', sendPublishMail)
}
