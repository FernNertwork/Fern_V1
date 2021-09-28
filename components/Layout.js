import Head from 'next/head'

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <title>Fern Network</title>
            </Head>

            <main>
                {children}
            </main>
            
        </>
    )
}

export default Layout
