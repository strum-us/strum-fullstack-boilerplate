import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Field, InputType, Int, ObjectType, registerEnumType } from 'type-graphql'

import ChattingRoom from './chattingRoom'
import User from '../user'
import { uuid } from 'short-uuid'

@InputType()
export class ChattingMessageCreateInput {
  @Field(() => [String])
  receivers!: string[]

  @Field({nullable:true})
  text?: string

  @Field({nullable:true})
  attachment?: string
}

@ObjectType()
@Table({ freezeTableName: true, underscored: true, timestamps: false })
export default class ChattingMessage extends Model<ChattingMessage> {
  @Field(() => Int)
  @Column({
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number

  @Field()
  @ForeignKey(() => ChattingRoom)
  @Column({ allowNull: false, onDelete: 'CASCADE' })
  chattingRoomId!: string

  @Field(() => [User],{nullable:false})
  read!: User[]

  @Field()
  @Column
  text?: string

  @Field()
  @Column
  attachment?: string

  @Field()
  @Column({
    allowNull: false,
    defaultValue: DataType.NOW,
    type: DataType.DATE(3),
  })
  createdAt!: Date
}
