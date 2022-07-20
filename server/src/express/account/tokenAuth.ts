import { AuthToken, AuthTokenResult, GuestPrefix, TokenType } from 'src/middlewares/auth'

/* eslint-disable no-inner-declarations */
import { Configs } from 'config/serverenv'
import User from 'src/database/user'
import { UserStatus } from 'src/database/models'
import { confirmJwtToken } from 'src/middlewares/auth/token'
import sequelize from 'src/database/database'

export async function tokenSignin(req: any, res: any) {
  const { token } = req.query
  try {
    const db = sequelize.getRepository(User)
    const decoded: any = confirmJwtToken(token)
    if (decoded) {
      const { id, exp, err }: TokenType = decoded
      if (!id || !exp || err) res.send({ result: AuthTokenResult.invalidToken })

      const user = await db.findOne({ where: { accountId: id } })
      if (!user) res.send({ result: AuthTokenResult.userNotFound })
      console.log({ 'token authenticated': id })
      res.send({ result: AuthTokenResult.authenticated, id: user.id })
    } else {
      res.send({ result: AuthTokenResult.invalidToken })
    }
  } catch (e) {
    console.log('generate token Error: ', e)
    res.send({ result: AuthTokenResult.invalidToken })
  }
}
