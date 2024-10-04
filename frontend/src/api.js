import axios from "axios";
// const API = axios.create({ baseURL: "https://chat-fusion-phi.vercel.app" });

export const signup_ = (userinfo) => {
  return axios.post("/api/auth/signup", userinfo);
};
export const signin_ = (userinfo) => {
  return axios.post("/api/auth/signin", userinfo);
};

export const logout_ = () => {
  return axios.post("/api/auth/logout",{});
};

export const getConversationUser_ = (searchterm) => {
  return axios.get(`api/users?q=${searchterm || ""}`);
};

export const sendMessage_ = (message, id) => {
  return axios.post(`api/messages/send/${id}`, { message });
};
export const getMessages_ = (id) => {
  return axios.get(`api/messages/${id}`);
};
export const searchUser_ = (searchQuery) => {
  return axios.get(`api/users/searchuser?q=${searchQuery}`);
};
export const uploadimg_ = (formData) => {
  return axios.post("/api/users/uploadimg", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  });
};
