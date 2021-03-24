import Layout from '../components/Layouts'
import {posts} from '../profile'
const Blog = ()=>(
    <Layout footer={false}>
        <h1 className="text-center">Blog</h1>
        <div className="row">
        {
            posts.map((post,i)=>(
                <div className="col-md-4" key={i}>
                    <div className="card h-100">
                        <div className="overflow">
                        <img src={post.imageURL} alt="" className="card-img-top"/>
                        </div>
                        <div className="card-body">
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                        </div>
                    </div>
                </div>
            ))
        }
        </div>
    </Layout>
)

export default Blog;