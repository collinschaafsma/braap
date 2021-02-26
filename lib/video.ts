import {gql} from 'graphql-request'
import {RequestDocument} from 'graphql-request/dist/types'
import {graphQLClient} from '../lib/graphql-client'

export const fetcher = async (query: RequestDocument) => {
  return await graphQLClient.request(query)
}

export const getAllVideosQuery =  gql`
  {
    videos {
      data {
        _id
        link
        _ts
      }
    }
  }
`

export type Video = {
  _id: string
  link: string
  _ts: number
}
