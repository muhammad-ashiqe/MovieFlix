import axios from "axios";

const axiosInstence = axios.create({
  baseURL: `https://api.themoviedb.org/3`
});


export default axiosInstence;