import Document , {Head , Main , NextScript} from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <html lanf="en-US">
                <Head>
                        <link rel="manifest" href="/static/manifest.json" />
                        <meta name="mobile-web-app-capable" content="yes" />
                        <meta name="apple-mobile-web-app-capable" content="yes" />
                        <meta name="application-name" content="hacker-news" />
                        <meta name="apple-mobile-web-app-title" content="hacker-news" />
                        <meta name="theme-color" content="#f60" />
                        <meta name="msapplication-navbutton-color" content="#f60" />
                        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                        <meta name="msapplication-starturl" content="/" />
                        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                        <link rel="icon" type="image/png" sizes="192x192" href="/static/images/icons/icon-192x192.png" />
                        <link rel="apple-touch-icon" type="image/png" sizes="192x192" href="/static/images/icons/icon-192x192.png" />
                        <link rel="icon" type="image/png" sizes="512x512" href="/static/images/icons/icon-512x512.png" />
                        <link rel="apple-touch-icon" type="image/png" sizes="512x512" href="/static/images/icons/icon-512x512.png" />
                        <link rel="icon" type="image/png" sizes="72x72" href="/static/static/images/icons/icon-72x72.png" />
                        <link rel="apple-touch-icon" type="image/png" sizes="72x72" href="/static/images/icons/icon-72x72.png" />
                        <link rel="icon" type="image/png" sizes="128x128" href="/static/images/icons/icon-icon-128x128.png.png" />
                        <link rel="apple-touch-icon" type="image/png" sizes="128x128" href="/static/images/icons/icon-icon-128x128.png.png" />
                </Head>
                <Main />
                <NextScript />
            </html>
        )
    }
}