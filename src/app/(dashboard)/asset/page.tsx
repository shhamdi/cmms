"use client";
import React from "react";
import Forms from "./Forms";
// import { Row, Col, Form } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
// import "/home/anis/Desktop/PFA/cmms/src/app/(dashboard)/asset/style.css";
const Assets = () => {
  const [isClicked, setisClicked] = useState(false);
  function add() {
    setisClicked(!isClicked);
  }
  function cancel() {
    setisClicked(!isClicked);
  }
  // return (
  //   <div>
  //     {isClicked ? (
  //       <div>
  //         <Button className="addButton" onClick={cancel}>
  //           Cancel
  //         </Button>
  //         <Forms />
  //       </div>
  //     ) : (
  //       <div>
  //         <nav className="navbar">
  //           <h1>Assets</h1>

  //           <Form.Group className="search">
  //             <Form.Control type="search" placeholder="search" />
  //             <Button>Search</Button>
  //           </Form.Group>
  //           <Button onClick={add} className="add">
  //             Add Asset
  //           </Button>
  //         </nav>
  //       </div>
  //     )}
  //   </div>
  // );
};

export default Assets;
