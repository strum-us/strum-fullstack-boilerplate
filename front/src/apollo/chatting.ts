import { Maybe, Query, Scalars } from 'src/graphql-types'
import { gql, useApolloClient } from '@apollo/client'

type CreateChattingInputOptions = {
  input: {
    participants: Array<Scalars['String']>
  }
}

type ReadChattingInputOptions = {
  input: {
    chattingRoomId: Scalars['String']
  }
}

type CreateChattingMessageInputOptions = {
  input: {
    chattingRoomId: Scalars['String'],
    text: Maybe<Scalars['String']>,
    attachment: Maybe<Scalars['String']>,
  }
}

type ReadChattingMessageInputOptions = {
  input: {
    chattingRoomId: Scalars['String']
  }
}

const CHATTING_ROOM_QUERY = gql`
  query getChattingRoom($input: ReadChattingInputOptions!){
    getChattingRoom(input: $input) {
      id,
      participants,
      createdAt,
    }
  }
`

export function useChatting() {
  const apolloClient = useApolloClient()
  const getChattingRoom = async (chattingRoomId:string) => {
    const res = await apolloClient.query<any, ReadChattingInputOptions>({
      query: CHATTING_ROOM_QUERY,
      variables: {
        input: {
          chattingRoomId,
        },
      },
      fetchPolicy: 'network-only',
    })
    return res
  }

  return {
    getChattingRoom,
  }
}

// export function useSearch() {
//   // const apolloClient = useApolloClient()
//   const getSearchedList = async (searchString: string, workspaceVisibleId: string, offset: number) => {
//     const res = await client.query<any, SearchInputOptions>({
//       query: SEARCHED_LIST_QUERY,
//       variables: {
//         input: {
//           searchString,
//           workspaceVisibleId: workspaceVisibleId ? workspaceVisibleId : '',
//           offset,
//         },
//       },
//       fetchPolicy: 'network-only',
//     })
//     return res.loading ? [] : res.data
//   }

//   return {
//     getSearchedList,
//   }
// }
