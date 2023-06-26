import { useNavigate } from "react-router";
import { Button} from "reactstrap";
export default function HomePage() {
    const navigate = useNavigate();
    const buttonHandler = () => {
        navigate('/about');
    }
    return(
        <>
        <div style={{backgroundImage: "url(https://tinyurl.com/2qdhsg95)",height: "100vh",backgroundSize: "cover"}}
        className="row">
        <div className="col col-md-6 ">
            <div className="ms-5" style={{marginTop: "150px"}}>
            <h3 className="mb-2 text-secondary">Hi, I'm Kyi Thar Soe</h3>
            <h1 className="lh-base mb-3">I enjoy designing tech <span style={{color: "#a651c2"}}>websites</span> and <span style={{color: "#a651c2"}}>digital</span> products</h1>
            <Button className="btn btn-secondary rounded-pill d-flex justify-content-center align-items-center py-2 border-0" onClick={buttonHandler}>About me <i className="fa-solid fa-arrow-right ms-2"></i></Button>
            </div>
        </div>
        <div className="col col-md-6">
            <div className="ms-2" style={{marginTop: "20px"}}>
                <img src="https://tinyurl.com/2qm8jxbs" alt="img" className="w-100 h-100 me-5"/>
            </div>
        </div>
        </div>
        </>
    )
}