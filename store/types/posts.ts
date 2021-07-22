import {IPost} from "../../types/types";

export enum PostsActionTypes {
    FETCH_POSTS = "FETCH_POSTS",
    FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
    FETCH_POSTS_ERROR = "FETCH_POSTS_ERROR",
    FETCH_ONE_POST = "FETCH_ONE_POST",
    FETCH_ONE_POST_SUCCESS = "FETCH_ONE_POST_SUCCESS",
    FETCH_ONE_POST_ERROR = "FETCH_ONE_POST_ERROR",
    ADD_NEW_POST = "ADD_NEW_POST",
    ADD_NEW_POST_SUCCESS = "ADD_NEW_POST_SUCCESS",
    ADD_NEW_POST_ERROR = "ADD_NEW_POST_ERROR",
    DELETE_POST = "DELETE_POST",
    DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS",
    DELETE_POST_ERROR = "DELETE_POST_ERROR",
    ADD_COMMENT = "ADD_COMMENT",
    ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS",
    ADD_COMMENT_ERROR = "ADD_COMMENT_ERROR"
}

interface Comments {
    postId: string | number;
    body: string;
    id: string | number
}

export interface PostsState {
    posts: IPost[],
    post:{
        id: string | number,
        title: string,
        body: string,
        comments: Comments[]
    }
    loading: boolean,
    error: boolean | null
}

export type PostsAction =   FetchPostsAction | FetchPostsSuccessAction | FetchPostsErrorAction | /// fetch
                            AddPostAction | AddPostSuccessAction | AddPostErrorAction |          /// add
                            DeletePostAction | DeletePostSuccessAction | DeletePostErrorAction |  /// delete
                            FetchOnePostAction | FetchOnePostSuccessAction | FetchOnePostErrorAction | /// fetchOnePost
                            AddCommentAction | AddCommentSuccessAction | AddCommentErrorAction /// addComment

interface FetchPostsAction {
    type: PostsActionTypes.FETCH_POSTS
}

interface FetchPostsSuccessAction {
    type: PostsActionTypes.FETCH_POSTS_SUCCESS,
    payload: any[]
}

interface FetchPostsErrorAction {
    type: PostsActionTypes.FETCH_POSTS_ERROR;
    payload: string
}

interface FetchOnePostAction {
    type: PostsActionTypes.FETCH_ONE_POST
}

interface FetchOnePostSuccessAction {
    type: PostsActionTypes.FETCH_ONE_POST_SUCCESS,
    payload: any
}

interface FetchOnePostErrorAction {
    type: PostsActionTypes.FETCH_ONE_POST_ERROR;
    payload: string
}

interface AddPostAction {
    type: PostsActionTypes.ADD_NEW_POST
}

interface AddPostSuccessAction {
    type: PostsActionTypes.ADD_NEW_POST_SUCCESS,
    payload: any
}

interface AddPostErrorAction {
    type: PostsActionTypes.ADD_NEW_POST_ERROR;
    payload: string
}

interface DeletePostAction {
    type: PostsActionTypes.DELETE_POST
}

interface DeletePostSuccessAction {
    type: PostsActionTypes.DELETE_POST_SUCCESS,
    payload: any
}

interface DeletePostErrorAction {
    type: PostsActionTypes.DELETE_POST_ERROR;
    payload: string
}

interface AddCommentAction {
    type: PostsActionTypes.ADD_COMMENT,
}

interface AddCommentSuccessAction {
    type: PostsActionTypes.ADD_COMMENT_SUCCESS
    payload: any
}

interface AddCommentErrorAction {
    type: PostsActionTypes.ADD_COMMENT_ERROR
    payload: string
}