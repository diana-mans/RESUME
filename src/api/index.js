import axios from 'axios';

export const getPosts = async (currentPage, searchValue, sort) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10&q=${searchValue}&_sort=${sort}&_order=asc`,
  );
  return res.data;
};

export const getLength = async (searchValue) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?q=${searchValue}`);
  return res.data.length;
};

export const getUser = async (id) => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  return res.data;
};

export const getUserPosts = async (id) => {
  //await delay(1);
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}/posts`);
  return res.data;
};
