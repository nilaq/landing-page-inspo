import { type NextPage } from 'next'
import Head from 'next/head'
import { api } from '~/lib/api'
import LandingPage from '~/components/LandingPage'
import Components from '~/components/Components'

const Home: NextPage = () => {
    const hello = api.example.hello.useQuery({ text: 'from tRPC' })

    return (
        <>
            <Head>
                <title>Resend</title>
                <meta name='description' content='General Landing Page' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <LandingPage></LandingPage>
        </>
    )
}

export default Home
