import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";;
import { Link } from "react-router-dom";
import App from "./App";
import Content from "./components/Content";
import Header from "./components/Header";
import { getUsers } from "../services/axios";

function Home() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      fetchUsers();
    }, []);
    const fetchUsers = async () => {
        const users = await getUsers();
        console.log(users?.data?.data);
        setUsers(users?.data?.data || []);
      };
      return (
        <div className="App">
          <App/>
          <Content name={"Home"} description="Lorem Ipsum">
            <Link to="/profile">
              <Button>Go To profile</Button>
            </Link>
            <ul>
              {users.map((item) => {
                return <li>{item.first_name}</li>;
              })}
            </ul>
          </Content>
          <Header />
        </div>
      );
    }
    
    export default Home;