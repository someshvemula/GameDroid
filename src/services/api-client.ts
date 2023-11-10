import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "01021587a22340489ee8beb15f74f59b",
  },
});
