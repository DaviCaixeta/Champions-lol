import axios from "axios";

const api = axios.create({
  baseURL:
    "http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion.json",
});

export default api;
