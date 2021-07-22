import axios from "axios";
import {PostsActionTypes} from "../types/posts";
import {Dispatch} from "react";

export const onePost = (id: string | number, _embed: string) => async  (dispatch : Dispatch<any>) => {
    dispatch({
        type: PostsActionTypes.FETCH_ONE_POST,
        payload: {}
    })
    try {
        const {data} = await axios.get(`${process.env.API_URL}/posts/${id}?_embed=${_embed}`)
        dispatch({
            type: PostsActionTypes.FETCH_ONE_POST_SUCCESS,
            payload: data
        })
    } catch (e) {
        dispatch({
            type: PostsActionTypes.FETCH_ONE_POST_SUCCESS,
            payload: e.message
        })
    }
}