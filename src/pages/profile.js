import React from 'react';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import Content from '../components/content/content';
import Header from '../components/header/header';
import { AppWrap } from '../appStyles';



export default function Profile() {
    const navigate = useNavigate();
  return (
    <div className="App">
    <AppWrap>
      <Header />
      <Content name="Profile"/>
      <h3>Back To Home</h3>
      <Button onClick={() => navigate("/")}>Back To Home</Button>
    </AppWrap>
    </div>

  );
}