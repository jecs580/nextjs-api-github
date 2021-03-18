import Layouts from '../components/Layouts'
const Index =()=>{
    return (
        <Layouts>
            {/* Header card */}
            <header className="row">
                <div className="col-md-12">
                    <div className="card card-body bg-secondary text-light">
                        <div className="row">
                            <div className="col-md-4">
                                <img src="/img1.jpg" className="img-fluid"/>
                            </div>
                            <div className="col-md-8">
                                <h1>Jorge Callisaya</h1>
                                <h3>FullStack Developer</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dignissimos exercitationem nulla rem rerum! Quasi, odit? Quidem assumenda porro optio! Facere distinctio quas sit sunt perspiciatis nam nisi assumenda cum.</p>
                                <a href="/hireme">Hire me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </Layouts>
    )
}

export default Index;
