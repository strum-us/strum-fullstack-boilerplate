import { TokenType } from 'src/middlewares/auth'
import { UpdatedAt } from 'sequelize-typescript'
import User from 'src/database/user'
import { UserStatus } from 'src/database/models'
import { confirmJwtToken } from 'src/middlewares/auth/token'
import sequelize from 'src/database/database'

export enum VerifyTokenResult {
  ok = 'ok',
  fail = 'fail',
  expired = 'expired',
}

type Result = {
  result: VerifyTokenResult,
  accountId?: string | null
}

export const verifyTokenCheck = async (token: string): Promise<Result> => {
  const decoded: any = confirmJwtToken(token)
  if (!decoded) return { result: VerifyTokenResult.fail, accountId: null }

  const { id, exp, err }: TokenType = decoded
  if (!id || !exp || err) return { result: VerifyTokenResult.fail, accountId: null }

  if (exp > Date.now())  return { result: VerifyTokenResult.expired, accountId: null }

  const db = sequelize.getRepository(User)
  const aliveUser = await db.findOne({ where: { id } })
  if (aliveUser) {
    return { result: VerifyTokenResult.ok, accountId: id }
  }
  return { result: VerifyTokenResult.ok, accountId: id }
}
