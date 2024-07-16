import '../lib/globals.css'
import Layout from "../components/layouts/main"

const KamusDigital = ({Component, pageProps}) => {
    return (
        <Layout>
            <Component {...pageProps}/>
        </Layout>
    )
}

export default KamusDigital;