import axios from "axios";

export const getUsers = () => {
  return axios({
    method: "get",
    url: "https://reqres.in/api/users?page=1",
  });
};
