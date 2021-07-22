import {PostsActionTypes} from "../types/posts";

import axios from "axios";
import {IPost} from "../../types/types";
import {Dispatch} from "react";

export const addNewPost = (body: any) => async  (dispatch : Dispatch<any>) =>{
    dispatch({
        type: PostsActionTypes.ADD_NEW_POST,
        payload: ""
    })
    try {
        const {data} = await axios.post<IPost>(`${process.env.API_URL}/posts`,body)
        dispatch({
            type: PostsActionTypes.ADD_NEW_POST_SUCCESS,
            payload: data
        })
    }catch (e){
        dispatch({
            type: PostsActionTypes.ADD_NEW_POST_ERROR,
            payload: "Произошла ошибка"
        })
    }

}