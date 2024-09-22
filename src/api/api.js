import axios from "axios";

const api = axios.create({
  //원래 url
  // baseURL: 'https://humble-commonly-goshawk.ngrok-free.app/',

  // 임시 url
  // baseURL: 'https://catfish-solid-specially.ngrok-free.app/',

  // imgBaseURL: 'https://catfish-solid-specially.ngrok-free.app',

  // 임시 url 2
  baseURL: "https://humble-commonly-goshawk.ngrok-free.app/",
  imgBaseURL: "https://humble-commonly-goshawk.ngrok-free.app",

  // 임시 url 3
  // baseURL: "https://catfish-solid-specially.ngrok-free.app/",

  // imgBaseURL: "https://catfish-solid-specially.ngrok-free.app",
});

export default api;
