import { Op, SyncOptions } from 'sequelize'

import ChattingMessage from './chatting/chattingMessage'
import ChattingRoom from './chatting/chattingRoom'
import { Sequelize } from 'sequelize-typescript'
import User from './user'
import UserLog from './userLog'
import config from '../../config/storageConfig'

// import testStorageConfig from '../../config/testStorage'

let dbConnectConfig
if (process.env.NODE_ENV === 'test') {
  dbConnectConfig = config.testDB
  // dbConnectConfig = config.developmentDB
} else if (process.env.NODE_ENV === 'production') {
  dbConnectConfig = config.productDB
} else {
  dbConnectConfig = config.developmentDB
}

const sequelize = new Sequelize({
  repositoryMode: true,
  dialect: 'mysql',
  host: dbConnectConfig.host,
  username: dbConnectConfig.username,
  password: dbConnectConfig.password,
  database: dbConnectConfig.schema,
  models: [
    User,
    UserLog,
    ChattingRoom,
    ChattingMessage
  ],
  operatorsAliases: {
    $and: Op.and,
    $or: Op.or,
    $eq: Op.eq,
    $gt: Op.gt,
    $gte: Op.gte,
    $lt: Op.lt,
    $lte: Op.lte,
    $like: Op.like,
    $ne: Op.ne,
    $notIn: Op.notIn,
    $in: Op.in,
    $not: Op.not,
  },
  define: {
    charset: 'utf8mb4',
    collate: 'utf8mb4_unicode_ci',
  },
  logging: false,
})

export async function initDatabase(options?: SyncOptions) {
  try {
    await sequelize.authenticate()
    await sequelize.sync({ alter: true, force: false, ...options })
  } catch (err) {
    if (err) throw err
  }
}

export default sequelize
