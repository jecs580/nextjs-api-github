import Layouts from '../components/Layouts'
import {skills, experiences} from '../profile'
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
        </Layouts>
    )
}

export default Index;
