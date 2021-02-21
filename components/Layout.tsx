import Head from 'next/head'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <Head>
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {children}
      </main>
    </div>
  )
}
export default Layout