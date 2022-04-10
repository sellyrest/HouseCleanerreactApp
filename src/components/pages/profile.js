import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import App from "./App";
import Content from "../content/content";
import Header from "../header/header";


function Profile() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <App/>
      <Header />
      <Content name={"Profile"} description="Lorem Ipsum" />
      <h1>Profile Page</h1>
      <Button onClick={() => navigate("/")}>Back To Home</Button>
      
    </div>
  );
}

export default Profile;
