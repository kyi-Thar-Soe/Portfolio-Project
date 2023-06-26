import { Button, Nav, NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";
import { routes } from "./RoutePage";
import { useLocation } from "react-router";
export default function NavBar() {
const router = useLocation();
    console.log(router)
    return (
        <>
        <header>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor: "#a651c2"}}>
                <div className="container-fluid">
                    <NavbarBrand href="/" className="ms-5">
                        <img src="https://tinyurl.com/2p3moxpf" alt="logo" style={{borderRadius: "50%",width: "40px",height:"40px"}}/> 
                    </NavbarBrand>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <Nav navbar className="m-auto mb-2 mb-lg-0 gap-5 fw-bold">
                {routes.map((route,index) => {
                    return (
                        <NavItem key={index}>
                            <NavLink href={route.path}>{route.name}</NavLink>
                        </NavItem>
                    )
                })}
                </Nav>
                    <div className="d-flex justify-content-center align-items-center me-5">
                    <i className="fa-solid fa-envelope me-2"></i>
                    <span className="fs-6 fw-bold">kyis8571@gmail.com</span>
                    </div>
                </div>
                </div>
            </nav>
        </header>
        </>
    )
}