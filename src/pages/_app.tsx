import { type AppType } from 'next/app'
import { Inter } from 'next/font/google'

import { api } from '~/lib/api'
import withDarkMode, { useDarkMode } from 'next-dark-mode'

import '~/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

const MyApp: AppType = ({ Component, pageProps }) => {
    const { darkModeActive } = useDarkMode()

    return (
        <main className={`${inter.className} ${darkModeActive ? 'dark' : ''}`}>
            <Component {...pageProps} />
        </main>
    )
}

export default api.withTRPC(withDarkMode(MyApp))
