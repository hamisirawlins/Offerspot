import axios from 'axios';

const API= axios.create({baseURL:'http://localhost:5000'});
const profile = localStorage.getItem('profile')

API.interceptors. request.use((req)=>{
    if(profile){
        req.headers.Authorization = `Bearer ${JSON.parse(profile).token}`;
    }
    return req;
});

export const fetchPosts= ()=> API.get('/posts');

export const createPost =(newPost)=> API.post('/posts', newPost);

export const updatePost=(id, updatedPost)=>API.patch(`/posts/${id}`, updatedPost);

export const deletePost=(id)=> API.delete(`/posts/${id}`);

export const likePost=(id)=> API.patch(`/posts/${id}/likePost`);

export const signIn=(formData) => API.post('/users/signin', formData);

export const signUp=(formData) => API.post('/users/signup', formData);