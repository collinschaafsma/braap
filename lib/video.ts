import { gql } from 'graphql-request'
import { graphQLClient } from '../lib/graphql-client'

export const fetcher = async (query) => {
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
