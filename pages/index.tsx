import { GetStaticProps } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'
import { getAllVideosQuery, fetcher } from '../lib/video'
import useSWR from 'swr'
import Card from '../components/Card'



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
      <section className="py-12">
        <div className="container mx-auto">

        {data ? (
          <div className="flex flex-wrap px-6">
            {data.videos.data.map((video) => (
              <div className="w-full lg:w-1/2   md:px-4 lg:px-6 py-5">
                <Card video={video} />
              </div>
            ))}
          </div>
        ) : (
          <div className="loader">loading...</div>
        )}
        </div>
      </section>
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
