export default function AboutPage() {
    return (
    <div style={{backgroundImage: "url(https://tinyurl.com/2qdhsg95)",height: "100vh",backgroundSize: "cover"}} className="row"> 

        <div className="col col-md-6">
            <div>
            <img src="https://tinyurl.com/2lrpgnmc" alt="aboutimg" className="w-100 h-100 mt-5"/>
            </div>
        </div>
            <div className="col col-md-6">
            <div style={{backgroundColor: "lightGrey",marginRight: "100px",marginTop: "70px"}} className="rounded-4">
            <h3 className="text-center py-3 text-decoration-underline" style={{color: "rgb(100,97,97)"}} >About Me</h3>
            <p style={{color: "rgb(100,97,97)",textAlign: "justify",padding:"0px 30px 30px 30px"}} className="lh-base fw-bold">
                <div style={{textIndent: "30px"}}>
                   Let me introduce about myself. I'm Kyi Thar Soe. I am 21-years-old student.
                   I studied IT programming at Mawlamyine University of Techology. I am currently studying the IT field
                   because my goal is to become a Frontend Developer. I am studying a lot to become a good Frontend Developer,
                   whether it's a hobby or a goal. I really enjoy creating and designing websites. And, I am also interested in updating and developing websites for the convience of users. Finally, I get exicted when a beautiful website comes out.
                </div>
                   <div className="text-wrap">I have mini projects that I have done like Stopwatch, Color Guessing Game, Music Player, Dictionary and Movie Project by using vanilla JavaScript. I have never done any big projects because I am just starting. But, I belive I can do it later.</div>
                </p>
                
                    
            </div>
            </div>
        </div>
        
            
    

    )
}