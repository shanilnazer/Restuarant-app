import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="https://i.postimg.cc/yxr40Pv6/istockphoto-981368726-612x612.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Khaleezh Restaurant
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header