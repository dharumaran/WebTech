import api from "../api";

export const fetchPosts = async () => {
  const res = await api.get("/posts");
  return res.data;
};

export const createPost = async ({ image, caption }) => {
  const res = await api.post("/posts", { image, caption });
  return res.data;
};

export const likePost = async (id) => {
  const res = await api.post(`/posts/${id}/like`);
  return res.data;
};

export const addComment = async (id, text) => {
  const res = await api.post(`/posts/${id}/comments`, { text });
  return res.data;
};
