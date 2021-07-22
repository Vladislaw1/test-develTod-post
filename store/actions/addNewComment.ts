import {PostsActionTypes} from "../types/posts";
import axios from "axios";
import {Dispatch} from "react";

export const addNewComment = (body: any) => async (dispatch : Dispatch<any>) => {
    dispatch({
        type: PostsActionTypes.ADD_COMMENT
    })
    try {
        const {data} = await axios.post("https://simple-blog-api.crew.red/comments",body)
        dispatch({
            type: PostsActionTypes.ADD_COMMENT_SUCCESS,
            payload: data
        })
    }catch (e) {
        dispatch({
            type:  PostsActionTypes.ADD_COMMENT_ERROR,
            payload: e.message
        })
    }
}