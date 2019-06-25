import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import StoriesList from '../components/StoriesList';
import Layout from '../components/Layout';

class Index extends React.Component {

    static async getInitialProps() {
        let stories;
        try {
            const response = await fetch('https://node-hnapi.herokuapp.com/news?page=1');
            stories = await response.json();
        } catch (error) {
            stories= [];
        }
        return { stories };
    }

    render() {

        const { stories } = this.props;

        if(stories.length === 0) {
                return <Error statusCode={503} />
        }

            return (
            <Layout title="Hacker News" description="Hacker News Blog based on Next Js Frame work">
                <div className="hackers-news-wrapper">
                    <StoriesList  stories={stories}  />
                </div>
            </Layout>
        )
    }
}

export default Index;