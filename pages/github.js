import Layouts from '../components/Layouts'
import Error from './_error'
const Github = ({user, statusCode})=>{
    console.log(user);
    if(statusCode){
        return <Error statusCode={statusCode}/>
    }
    return(
        <Layouts footer={false}>
            <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="card card-body text-center">
                        <h1>{user.name}</h1>
                        <img src={user.avatar_url} alt=""/>
                        <p>{user.bio}</p>
                        <a href={user.blog} target="_blank" className="btn btn-outline-secondary my-2">My Blog</a>
                        <a href={user.html_url} target="_blank" className="btn btn-outline-secondary">Go to Github</a>
                    </div>
                </div>
            </div>
        </Layouts>
    )
}

export async function getServerSideProps() {
    const res = await fetch('https://api.github.com/users/jecs580');
    const data = await res.json();
    const statusCode = res.status>200 ? res.status: false;
    return {
        props:{
            user:data,
            statusCode
        }
    }
}

export default Github;