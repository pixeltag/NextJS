import Link from 'next/link'

const StoriesList = ({ stories }) => (
            <div class="my-3 p-3 bg-white rounded shadow-sm">
                <h6 class="border-bottom border-gray pb-2 mb-0">Recent News</h6>
                { stories.map(story => (
                    <div class="media text-muted pt-3"  key={story.id}>
                    <svg class="bd-placeholder-img mr-2 rounded" width="32" height="32" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: 32x32"><rect width="100%" height="100%" fill="#e83e8c"></rect></svg>
                    <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                        <strong class="d-block text-gray-dark"><a href={story.url}>{story.title}</a></strong>
                        <span className="badge badge-default  mr-2">{ story.points || 0 } Points</span>
                            <Link href={`/story?id=${story.id}`}>
                                <a>{ story.comments_count || 0 } Comments</a>
                            </Link>
                    </p>
                    </div>
                ))}
            </div>
)

export default StoriesList;