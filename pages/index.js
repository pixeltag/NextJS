import fetch from 'isomorphic-fetch';
import Error from 'next/error';

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
            <div>
                <h2>Hackers News</h2>
                <div className="hackers-news-wrapper">
                    { stories.map(story => {
                       return <h4 key={story.id}>{story.title}</h4>
                    })}
                </div>
            </div>
        )
    }
}

export default Index;