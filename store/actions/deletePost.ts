import {PostsActionTypes} from "../types/posts";
import axios from "axios";
import {Dispatch} from "react";

export const deletePost = (id : string | number) => async  (dispatch : Dispatch<any>) => {
    dispatch({
        type: PostsActionTypes.DELETE_POST,
        payload: ""
    })
    try {
      await axios.delete(`${process.env.API_URL}/posts/${id}`)
        dispatch({
            type: PostsActionTypes.DELETE_POST_SUCCESS,
            payload: id
        })
    }catch (e) {
        dispatch({
            type: PostsActionTypes.DELETE_POST_ERROR,
            payload: e.message
        })
    }
}