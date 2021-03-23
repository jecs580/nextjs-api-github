import Layout from '../components/Layouts'

const _error= ({statusCode})=>{
    return (
        <Layout>
            {
                statusCode? (
                   <>
                    <h1 className="display-1 text-center">{statusCode}</h1>
                    <p className="text-center">Couldn't load your page: Status Code {statusCode}</p>
                   </>
                ):(
                    <p className="text-center">Couldn't load this page</p>

                )
            }
        </Layout>
    )
}

export default _error;