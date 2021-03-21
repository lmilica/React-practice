import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID vzgE7izXSwh0VVvZnP5NDvxd_fm3kXjg8HHQOCbVFRs",
  },
});
