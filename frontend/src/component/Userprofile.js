import React, { useState, useEffect } from 'react';
import { Button, Card, Container, Figure, Form, Nav, Navbar, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getcurrentuser, updateteuser } from '../Redux/Action';
import AjoutProduct from './AjoutProduct';
import { Box } from '@mui/material';


const UserProfile = ({ user }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [password, setPassword] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(user?.image);
console.log(name)
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleProfilePhotoChange = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(URL.createObjectURL(file));
  };
  const handleUpdate = () => {
    dispatch(updateteuser(user._id,{email,name,image:profilePhoto}));
  };
  return (
    <div className="user-profile">
    
      <Container>
        <Card className="mt-5">
          <Card.Header as="h5" className="text-center bg-success text-white">Profile</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formUsername">
                <Figure>
                  <Card.Img src={user.image}/>
                  
                </Figure>
                <Form.Control
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePhotoChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formName">
                <h5>Name:<Form.Control
                
                type="text"
                placeholder="Name"
                defaultValue={user.name}
                onChange={handleNameChange}
                
              /></h5>
          
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
              <h5>Email:</h5>
                <Form.Control
                  type="email"
                  placeholder="Email Address"
                  defaultValue={email}
                  onChange={handleEmailChange}
                />
               
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPassword">
                <h5>Password:</h5>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
               
              </Form.Group>

              <Form.Group className="mb-3" controlId="formUserID">
              <h5>User_id:</h5>
                <Form.Control type="text" placeholder={user._id} disabled />
              </Form.Group>

              <Stack direction="horizontal">
                <Button variant="secondary" onClick={handleUpdate}>Update</Button>
              </Stack>
            </Form>
          </Card.Body>
        </Card>
      </Container>
      <br></br>
      <br></br>
      <Box style={{marginLeft:"600px"}}>{user?.role==="admin"?<AjoutProduct/>:null}</Box>
      
      <br></br>
      <br></br>

      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{marginLeft:"400px"}}>
              <Nav.Link> Historique</Nav.Link>
              <Nav.Link> </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    
    </div>
  );
};

export default UserProfile;
