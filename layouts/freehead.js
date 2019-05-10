import Head from 'next/head'

function FreeHead() {
    return (
        <div>
            <Head>
                <title>Max - A scaffold is composed of MongoDB Koa Nextjs and graphql.</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
                    key="viewport"/>
                <link href="../static/favicon.ico" rel="shortcut icon" type="image/x-icon"/>
            </Head>
        </div>
    )
}

export default FreeHead