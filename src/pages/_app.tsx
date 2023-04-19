import { type AppType } from 'next/app'
import { Inter } from 'next/font/google'

import { api } from '~/lib/api'
import withDarkMode from 'next-dark-mode'

import '~/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

const MyApp: AppType = ({ Component, pageProps }) => {
    return (
        <main className={`${inter.className}`}>
            <Component {...pageProps} />
        </main>
    )
}

export default api.withTRPC(withDarkMode(MyApp))
