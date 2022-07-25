import { Field, InputType } from "type-graphql";

@InputType()
export class CreateChattingInputOptions {
  @Field(() => [String])
  participants!: string[]
}

@InputType()
export class ReadChattingInputOptions {
  @Field(() => String)
  chattingRoomId!: string
}

@InputType()
export class CreateChattingMessageInputOptions {
  @Field(() => String)
  chattingRoomId!: string
  
  @Field(() => String, {nullable: true})
  text?: string

  @Field(() => String, {nullable: true})
  attachment?: string
}

@InputType()
export class ReadChattingMessageInputOptions {
  @Field(() => String)
  chattingRoomId!: string
}

// export type ChattingRoom = {
//   name: string,
//   participants: string[],
//   createdAt: Date,
// }

// export type ChattingMessage = {
//   sender: string,
//   receiver: string,
//   read: string[],
//   text: string,
//   attachment: string,
//   createdAt: Date,
// }

export enum ChattingSubscription {
  ReadMessage = 'readMessage',
  CreateMessage = 'createMessage'
}