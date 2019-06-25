import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import StoriesList from '../components/StoriesList';
import Layout from '../components/Layout';
import Link from 'next/link';

class Index extends React.Component {

    static async getInitialProps({ req , res , query}) {
        let stories;
        let page = Number(query.page) || 1;
        try {
            const response = await fetch(`https://node-hnapi.herokuapp.com/news?page=${page}`);
            stories = await response.json();
        } catch (error) {
            stories= [];
        }
        return { stories  , page};
    }

    render() {

        const { stories , page  } = this.props;

        if(stories.length === 0) {
                return <Error statusCode={503} />
        }

            return (
            <Layout title="Hacker News" description="Hacker News Blog based on Next Js Frame work">
                <div className="hackers-news-wrapper">
                    <StoriesList  stories={stories}  />
                    <div className="pager">
                        <Link href={`/?page=${page - 1}`}>
                            <button className="btn btn-primary">
                                    Prev Page {page - 1}
                            </button>
                        </Link>
                        <Link href={`/?page=${page + 1}`}>
                            <button className="btn btn-primary">
                                    Next Page {page + 1}
                            </button>
                        </Link>
                    </div>
                </div>
            </Layout>


        )
    }
}

export default Index;