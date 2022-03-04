import * as api from "../api";
import { FETCH_ALL, CREATE, DELETE } from "../constants/actionTypes";

export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        const action = {
            type: FETCH_ALL,
            payload: data 
        }
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        const action = { 
            type: CREATE,
            payload: data
        }
        dispatch(action);
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        const action = {
            type: DELETE,
            payload: id
        }

        dispatch({action})
    } catch (error) {
        console.log(error);
    }
}