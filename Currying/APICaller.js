import authorizedAPI from "./apiClient";


const usersClient = authorizedAPI('/users');
const postClient = authorizedAPI('/posts');


// GET /users
export const fetchUsers = () => userClient.get();

// POST /users
export const createUser = (userData) => userClient.post(userData);

// PUT /posts/123
export const updatePost = (postId, data) => 
  authorizedApi(`/posts/${postId}`).put(data);


// DELETE /posts/123
export const deletePost = (postId) => 
  authorizedApi(`/posts/${postId}`).delete();