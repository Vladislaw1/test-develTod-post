import {PostsActionTypes} from "../types/posts";

import axios from "axios";
import {IPost} from "../../types/types";
import {Dispatch} from "react";

export const allPostReq = () => async  (dispatch : Dispatch<any>)  =>{
    dispatch({
        type: PostsActionTypes.FETCH_POSTS,
        payload: ""
    })
    try {
        const {data} = await axios.get<IPost[]>(`${process.env.API_URL}/posts`)
        dispatch({
            type: PostsActionTypes.FETCH_POSTS_SUCCESS,
            payload: data
        })
    }catch (e){
        dispatch({
            type: PostsActionTypes.FETCH_POSTS_ERROR,
            payload: "Произошла ошибка"
        })
    }

}