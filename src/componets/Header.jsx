import React from 'react';
import autorPhoto from '../assets/img/autor_photo.png';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Search from './Search';
import Sort from './Sort';

const Header = () => {
  return (
    <>
      <Navbar key={false} bg="light" expand={false} className="mb-3">
        <Container>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand`}
            aria-labelledby={`offcanvasNavbarLabel-expand`}
            placement="start">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand`}>МИТРА СОФТ Кейс</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="/">Список постов</Nav.Link>
                <Nav.Link href="/autor">Обо мне</Nav.Link>
                <br />
                <br />

                <small>Диана Мансурова</small>
                <small>diana.mans2000@gmail.com</small>
                <img className="autorPhoto" src={autorPhoto} />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          <div className="search-container">
            <Search />
            <Sort />
          </div>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Header;
