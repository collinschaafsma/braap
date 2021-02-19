import { GetStaticProps } from 'next'
import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Hello-Home</title>
      </Head>
      <div>index</div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {

    }
  }
}
