import Layouts from '../components/Layouts'
import Link from 'next/link'
import {skills, experiences, proyects} from '../profile'
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
                                <h1>Jorge Callisaya Sanchez</h1>
                                <h3>FullStack Developer</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis dignissimos exercitationem nulla rem rerum! Quasi, odit? Quidem assumenda porro optio! Facere distinctio quas sit sunt perspiciatis nam nisi assumenda cum.</p>
                                <a href="/hireme">Hire me</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* Second section */}
            <div className="row py-2">
                <div className="col-md-4">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h1>Skills</h1>
                           {
                               skills.map((skill,i)=>(
                                   <div className="py-3" key={i}>
                                    <h5>{skill.skill}</h5>
                                   <div className="progress">
                                    <div className="progress-bar" role="progressbar" style={{width:`${skill.percentage}%`}}
                                    aria-valuenow={skill.percentage}
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    ></div>
                                    </div>
                                   </div>
                                    ))
                                }
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h1>Experience</h1>
                            <ul>
                                   {
                                       experiences.map((exp,i) =>(
                                        <li key={i}>
                                            <h1>{exp.title}</h1>
                                            <h5>{exp.from}-{exp.to? exp
                                            .to:'currently'}</h5>
                                            <p>{exp.description}</p>
                                        </li>
                                       ))
                                   }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Portfolio */}
            <div className="row">
                <div className="col-md-12">
                    <div className="card card-body bg-dark">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="text-center text-light">Portfolio</h1>
                            </div>
                                {
                                    proyects.map((pry,i)=>(
                                    <div className="col-md-4 p-2" key={i}>
                                        <div className="card h-100">
                                            <div className="overflow">
                                            <img src={pry.image} alt="" className="card-img-top"/>
                                            </div>
                                            <div className="card-body mb-3">
                                                <h3>{pry.name}</h3>
                                                <p>{pry.description}</p>
                                                <a target="_blank" href={pry.link}>Know more</a>
                                            </div>
                                        </div>
                                    </div>
                                    ))
                                }
                        
                        </div>
                        <div className="text-center mt-4">
                            <Link href="/portfolio">
                            <a className="btn btn-outline-light">More Projects</a>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </Layouts>
    )
}

export default Index;
