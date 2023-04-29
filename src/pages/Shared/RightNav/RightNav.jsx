import { Button } from 'react-bootstrap';
import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
            <Button variant="outline-secondary"> <FaGithub /> Login with Github</Button>
            <div>
                <h4 className='mb-4 mt-4'>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;