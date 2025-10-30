import api from "../api";

export const signup = async ({ username, password }) => {
  const res = await api.post("/auth/signup", { username, password });
  return res.data;
};

export const login = async ({ username, password }) => {
  const res = await api.post("/auth/login", { username, password });
  return res.data;
};
