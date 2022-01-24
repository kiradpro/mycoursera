import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import AddCourse from "./AddCourse";
import CoursesList from "./CoursesList";
import { useState } from "react";


const Home = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }   
  };

  const [bookId, setBookId] = useState("");

  const getBookIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setBookId(id);
  };


  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">Welcome <br />
            {user && user.email}
          </Navbar.Brand>
          <Button variant="primary" onClick={handleLogout}>
            Log out
          </Button>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddCourse id={bookId} setBookId={setBookId} />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <CoursesList getBookId={getBookIdHandler} />
          </Col>
        </Row>
      </Container>
    </>
  );
};


export default Home;