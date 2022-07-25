import { Column, DataType, HasMany, Model, Table } from 'sequelize-typescript'
import { Field, InputType, ObjectType } from 'type-graphql'

import User from '../user'
import { uuid } from 'short-uuid'

@InputType()
export class ChattingRoomInput {
  @Field(() => [String])
  participants!: string[]
}

@ObjectType()
@Table({ freezeTableName: true, underscored: true, timestamps: false })
export default class ChattingRoom extends Model<ChattingRoom> {
  @Field({nullable:false})
  @Column({
    primaryKey: true,
  })
  id!: string

  @Field(type => [String],{nullable:false})
  participants!: string[]

  @Field()
  @Column({
    allowNull: false,
    defaultValue: DataType.NOW,
    type: DataType.DATE(3),
  })
  createdAt!: Date
}
