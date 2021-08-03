import axios from "axios";

export default {
  index(token: string) {
    return axios.get("/api/discord/guilds", {
      params: {
        token,
      },
    });
  },
};
