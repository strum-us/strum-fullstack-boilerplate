import ChattingMessage from "src/database/chatting/chattingMessage"
import ChattingRoom from "src/database/chatting/chattingRoom"
import { CreateChattingMessageInputOptions } from "src/graphql/chatting/type"
import { Sequelize } from "sequelize-typescript"

export const createChattingRoom = async({
  db, participants,chattingRoomId
}:{
  db:Sequelize,
  participants:string[],
  chattingRoomId:string,
}):Promise<ChattingRoom> => {
  await db.getRepository(ChattingRoom).create({
    id:chattingRoomId,
    participants
  })
  const ret = await db.getRepository(ChattingRoom).findOne({
    where:{
      id:chattingRoomId
    }
  })
  return ret
}

export const getChattingRoom = async({
  db, chattingRoomId
}:{
  db: Sequelize,
  chattingRoomId: string,
}) => {
  return await db.getRepository(ChattingRoom).findOne({
    where:{
      id: chattingRoomId
    }
  })
}

export const createChattingMessage = async({
  db, sender, chattingMessageObject
}:{
  db: Sequelize,
  sender: string,
  chattingMessageObject:CreateChattingMessageInputOptions
}) => {
  return await db.getRepository(ChattingMessage).create({
    read:[sender],
    ...chattingMessageObject,
  })
}

export const getChattingMessages = async({
  db, chattingRoomId,
}:{
  db: Sequelize,
  chattingRoomId: string,
}) => {
  return await db.getRepository(ChattingMessage).findAll({
    where:{
      chattingRoomId,
    }
  })
}