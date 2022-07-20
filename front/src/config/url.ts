import * as dotenv from 'dotenv'

dotenv.config()

// console.log(process.env)
export const WEB_URL = process.env.WEB_URL

const SeoulProductionAWSURLs = {
  API_URL: 'http://localhost:3030',
  GRAPHQL_URL: 'http://localhost:3030/graphql',
  SUBSCRIPTION_URL: 'ws://localhost:3030/subscription',
  FILE_UPLOAD_URL: 'http://localhost:8000',

  GA: {
    SERVICE_TITLE: 'QUDA',
    GA_TRACK_ID: 'UA-00000000-2',
    GA_SEND: true,
    PIXEL_ID: 100000000000001,
    PIXEL_SEND: true,
  },
}

const DevelopmentLocalURLs = {
  API_URL: 'http://localhost:3030',
  GRAPHQL_URL: 'http://localhost:3030/graphql',
  SUBSCRIPTION_URL: 'ws://localhost:3030/subscription',
  FILE_UPLOAD_URL: 'http://localhost:8000',

  GA: {
    SERVICE_TITLE: 'QUDA',
    GA_TRACK_ID: 'UA-00000000-9',
    GA_SEND: true,
    PIXEL_ID: 100000000000001,
    PIXEL_SEND: true,
  },
}

const URLs = process.env.NODE_ENV === 'development' ? DevelopmentLocalURLs : SeoulProductionAWSURLs

export { URLs }
