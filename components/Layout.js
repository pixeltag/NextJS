import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({title , description , children }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="description" conten={description} />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous" />
        </Head>
            <Header />
            <div className="container">
                {children}
            </div>
            <Footer />
    </div>
    );

export default Layout;