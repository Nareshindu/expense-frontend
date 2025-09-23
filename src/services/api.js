// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://3.80.85.71:8080/api", // Backend URL
// });

// export default API;


import axios from "axios";

const API = axios.create({
  baseURL: "/api", // relative → Nginx will proxy
});

export default API;