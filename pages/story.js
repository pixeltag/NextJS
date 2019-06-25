import fetch from 'isomorphic-fetch';
import Error from 'next/error';
import Layout from '../components/Layout';
import Router from 'next/router';

class Story extends React.Component {

    static async getInitialProps({req , res , query})  {
        let storyId = Number(query.id);
        let story;
        try {
            const response = await fetch(`https://node-hnapi.herokuapp.com/item/${storyId}`)
            story = await response.json();
        } catch (error) {
            console.log(error);
            story = null;
        }
        return { story };

    }

    render() {
        const {story} = this.props;
        if(story.length === 0) {
            return ( <Error statusCode="503" />)
        }
        return (
            <Layout title={story.title}>
                    <section className="jumbotron text-center">

                        <div className="container">
                        <h1 className="jumbotron-heading">{story.title}</h1>
                        <span className="lead text-muted mr-4">{story.comments_count || 0} Comments</span>
                        <span className="lead text-muted mr-4">{story.points || 0} Points</span>
                        <span className="lead text-muted mr-4">{story.time_ago || 0}</span>
                        {story.comments.map( comment => (
                                <div className="blog-post" key={comment.id}>
                                        <p className="blog-post-meta">{comment.time_ago} by <a href="#">{comment.user}</a></p>
                                        <p>{comment.content}</p>
                            </div>
                            ))}
                        <p>
                            <a href="#" className="btn btn-primary my-2" onClick={() => {Router.back()}}>Go Back ..</a>
                            {/* <a href="#" classNameName="btn btn-secondary my-2">Secondary action</a> */}
                        </p>
                        </div>
                    </section>
            </Layout>
        )
    }
}

export default Story;