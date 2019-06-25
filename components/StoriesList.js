import Link from 'next/link'

const StoriesList = ({ stories }) => (
    <div className="stories-list">
            { stories.map(story => (
                <div className="story-wrapper" key={story.id}>
                    <h4 className="story-title">
                        <a href={story.url}>{story.title}</a>
                    </h4>
                    <span className="story-points">{ story.points || 0 } Points</span>
                    <Link href={`/story?id=${story.id}`}>
                        <a>{ story.comments_count || 0 } Comments</a>
                    </Link>
                </div>
            ))}
            <style jsx>{`
                .stories-list {
                    display: flex;
                    padding: 0 2em;
                    flex-direction: column;
                }

                .story-wrapper {
                    padding: 0.5em 0;
                }

                .story-title {
                    margin: 0;
                    margin-bottom: 10px;
                }

                .story-title a {
                    text-decoration: none;
                    color:#000;
                }

                .story-points {
                    margin-right:1em;
                }

            `}</style>
    </div>
)

export default StoriesList;