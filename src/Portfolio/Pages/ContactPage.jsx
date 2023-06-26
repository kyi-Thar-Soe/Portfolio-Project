import {useForm} from 'react-hook-form';
import { Form, FormGroup,Label,Button,Modal, ModalBody } from 'reactstrap';
import { useState } from 'react';
import {LuPartyPopper} from 'react-icons/lu';
export default function ContactPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log(data);
        console.log(errors)
     }
     const [modal, setModal] = useState(false);
     const toggle = () => setModal(!modal);
    
    return (
    <div style={{backgroundImage: "url(https://tinyurl.com/2qdhsg95)",backgroundSize: "cover"}}
    className="fontColor fw-bold">
    <div className='mt-4'>
        <h3 className="text-center mb-5 contact">Contact Me</h3>
    </div>
    <Form onSubmit={handleSubmit(onSubmit)}>
        <div className='d-flex gap-5 justify-content-around mb-4'>
        <div className='row'>
        <FormGroup className=' col-12 col-md-6'>
                <Label>First Name</Label>
                <input type='text' className="form-control mt-2"/>
        </FormGroup>
        <FormGroup className=' col-12 col-md-6 '>
                <Label>Last Name</Label>
                <input type='text' className="form-control mt-2"/>
        </FormGroup>
        </div>
        </div>

        <div className='d-flex gap-5 justify-content-around mb-4'>
            <div className='row'>
            <FormGroup className=' col-12 col-md-6'>
                <Label>Email</Label>
                <input type="email" className="form-control mt-2"
                    {...register('email',{ required: true })}/>
                    {errors.email && (
                    <span className="text-danger" style={{fontSize: "15px"}}>Email is required</span>
                    )}
            </FormGroup>
            <FormGroup className=' col-12 col-md-6'>
                <Label>Phone Number</Label>
                <input type='number' className="form-control mt-2" {...register('number',{ required: true })}/>
                    {errors.number && (
                    <span className="text-danger" style={{fontSize: "15px"}}>Your phone number is required</span>
                    )}
            </FormGroup>
            </div>
        </div>
        <div style={{marginLeft: "390px"}}>
            <input type='checkbox' className='me-3 checkbox'/>
            <span>I accept the terms</span>
        </div>
        <Button type="submit" className="btn btn-success mt-4" style={{marginLeft: "390px"}} onClick={toggle}>Submit</Button>
       {errors.email && errors.number ?  
       <Modal isOpen={modal} toggle={toggle}>
             <ModalBody>
                 Please enter personal information !!!
             </ModalBody>
        </Modal> : 
        <Modal isOpen={modal} toggle={toggle}>
             <ModalBody>
                <div className='d-flex gap-2'>
                <p>Thanks a million for contacting me!</p>
                 <LuPartyPopper/>
                 <LuPartyPopper/>
                 <LuPartyPopper/>
                </div>
             </ModalBody>
        </Modal>
        }
       
    </Form>
    <footer className="mt-5 d-flex justify-content-between align-items-center" style={{backgroundColor: "lightgray",height: "60px"}}>
            <h3 className="mt-3 ms-5 fs-6" style={{color: " #424142",textShadow: "1px 1px 6px #a651c2"}}>
            Terms of Service</h3>
            <div className="mt-2 me-5">
                <a href="https://github.com/kyi-Thar-Soe"><i className="fa-brands fa-github"></i></a>
                <a href="https://www.facebook.com"><i className="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/kyithar.s/"><i className="fa-brands fa-square-instagram"></i></a>
                <a href="https://discord.gg/1065278536304308314"><i className="fa-brands fa-discord"></i></a>
            </div>
         
    </footer>
    </div>
)
}
