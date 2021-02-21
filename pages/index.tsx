import { GetStaticProps } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import { getAllVideosQuery, fetcher } from '../lib/video'
import useSWR from 'swr'
import { Player } from '../components/Player'



const Home = (props: {videos}) => {

  const { error, data } = useSWR(
    getAllVideosQuery, fetcher, { initialData: props.videos }
  )
  
  if (error) {
    console.log(error)
    return <div>borked</div>
  }

  return (
    <Layout>
      <Head>
        <title>Braap</title>
      </Head>
      <div className="bg-gradient-to-r from-red-500 shadow">Braap!</div>
      {data ? (
        <ul>
          {data.videos.data.map((video) => (
            <li key={video._id}>
              <Player video={video} />
            </li>
          ))}
          </ul>
      ) : (
        <div className="loader">loading...</div>
      )}
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const videos = await fetcher(getAllVideosQuery)
  return {
    props: {
      videos
    }
  }
}
