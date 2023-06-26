export default function PortfolioPage() {
    return (
        <div className="row">
            <div className="col col-md-4">
                <div style={{background: "lightgrey",marginTop: "100px"}} className="ms-3 me-3 rounded-pill">
                <p style={{textAlign: "justify",padding: "50px 60px",color: "rgb(100,97,97)"}} className="lh-lg fw-bold">I have studied <span className="textColor">HTML, CSS, Bootstrap</span> and <span className="textColor">JavaScript</span>. Regarding that, I got <span className="textColor">Certificate</span>. Currently, I am  studying <span className="textColor">React</span>. After that, I have to continue learning <span className="textColor">PHP</span> and <span className="textColor">Laraval</span> languages. Now, there are a lot of things to study, but when the time comes, I will have studied these languages. Then, I will show it as my skills.</p>
                </div>
            </div>

            <div  className="col col-md-4">
                <div style={{marginTop: "70px"}}>
                <img src="https://tinyurl.com/2pvpa7d3" alt="portfolioimg" className="w-100 h-100"/>
                </div>
            </div>

            <div  className="col col-md-4">
                <div style={{background: "lightgrey",marginTop: "100px"}} className="ms-3 me-3 rounded-pill">
                <p style={{textAlign: "justify",padding: "50px 60px",color: "rgb(100,97,97)"}} className="lh-lg fw-bold">Although I still need  Hard Skills, I have a lot of <span className="textColor">Soft Skills</span> like Project Management, Proposal Writing, Problem Solving, Social Leadership and Communication. I have attended courses related to these and received <span className="textColor">Certificates</span>.</p>
                </div>
            </div>
            </div>

    )
}