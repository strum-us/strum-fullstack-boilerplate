import { Arg, Args, Ctx, Field, InputType, Mutation, ObjectType, Publisher, PubSub, Query, Resolver, Root, Subscription } from 'type-graphql'
import { Context } from 'src/types'
import { createChattingMessage, createChattingRoom, getChattingRoom } from 'src/service/chatting';
import { uuid } from 'short-uuid';
import ChattingMessage from 'src/database/chatting/chattingMessage';
import { ChattingSubscription, CreateChattingInputOptions, CreateChattingMessageInputOptions, ReadChattingInputOptions } from './type';
import ChattingRoom from 'src/database/chatting/chattingRoom';


@Resolver()
export class ChattingResolver {
  
  @Query(() => ChattingRoom)
  async getChattingRoom(
    @Arg('input') input: ReadChattingInputOptions,
    @Ctx() { db, userId }:Context,
    ): Promise<ChattingRoom> {
      const { chattingRoomId } = input
      return await getChattingRoom({db, chattingRoomId})
    }

  @Mutation(() => ChattingRoom)
  async createChattingRoom(
    @Arg('input') input: CreateChattingInputOptions,
    @Ctx() { db, userId }:Context,
  ): Promise<ChattingRoom> {
    const { participants } = input
    const chattingRoomId = uuid()
    return await createChattingRoom({db, participants,chattingRoomId})
  }

  // @Mutation()
  // async updateChattingRoom(
  //   @Arg('input') input: ChattingInputOptions,
  //   @Ctx() { db, userId }:Context,
  // ): Promise<ChattingRoom> {
  //   const { chattingRoomId } = input
  //   return await getChattingRoom({db, chattingRoomId})
  // }

  // @Mutation()
  // async deleteChattingRoom(
  //   @Arg('input') input: ChattingInputOptions,
  //   @Ctx() { db, userId }:Context,
  // ): Promise<ChattingRoom> {
  //   const { chattingRoomId } = input
  //   return await getChattingRoom({db, chattingRoomId})
  // }

  @Mutation(() => ChattingMessage)
  async createChattingMessage(
    @Arg('input') input: CreateChattingMessageInputOptions,
    @PubSub(ChattingSubscription.CreateMessage) publish: Publisher<CreateChattingMessageInputOptions>,
    @Ctx() { db, userId }:Context,
  ): Promise<ChattingMessage> {
    const chattingMessageObject = input
    return await createChattingMessage({db, sender:userId, chattingMessageObject})
  }

  @Query(() => [ChattingMessage])
  async getChattingMessages(
    @Arg('input') input: ReadChattingInputOptions,
    @Ctx() { db, userId }:Context,
  ): Promise<ChattingMessage[]> {
    const { chattingRoomId } = input
    return await getChattingRoom({db, chattingRoomId})
  }

  @Subscription(() => ChattingMessage, {
    topics: ChattingSubscription.CreateMessage,
    filter: () => true
  })
  async propagateChattingMessage(
    @Root() chattingMessage:ChattingMessage
  ){
    console.log('create message', chattingMessage.text)
  }

  @Subscription(() => ChattingMessage, {
    topics: ChattingSubscription.CreateMessage,
    filter: () => true
  })
  async propagateChattingMessageRead(
    @Root() chattingMessage:ChattingMessage
  ){
    console.log('read message', chattingMessage.text)
  }

}
