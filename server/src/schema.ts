/* eslint-disable no-path-concat */
import 'reflect-metadata'

import { SampleResolver } from './graphql/sampleresolver'
import { UserResolver } from './graphql/user'
import { buildSchema } from 'type-graphql'

export async function getSchema() {
  const schema = await buildSchema({
  // resolvers: [__dirname + '/graphql/**/*.{ts,js}'],
    resolvers: [
      UserResolver,
      SampleResolver,
    ],
    validate: false,
  })
  return schema
}
