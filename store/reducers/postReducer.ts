import {PostsAction, PostsActionTypes, PostsState} from "../types/posts";

const initialState: PostsState = {
    posts: [],
    post: {
        id: "",
        title:"",
        body:"",
        comments: [{
            postId:"",
            body:"",
            id:""
        }]
    },
    loading: false,
    error: null
}

export const postsReducer = (state = initialState, action: PostsAction) => {
    switch (action.type) {
        case PostsActionTypes.FETCH_POSTS:
            return {
                posts: [],
                post:{},
                loading: true,
                error: null,
            }
        case PostsActionTypes.FETCH_POSTS_SUCCESS:
            return {
                posts: action.payload,
                post:{},
                loading: false,
                error: null,
            }
        case PostsActionTypes.FETCH_POSTS_ERROR:
            return {
                posts: [],
                post:{},
                loading: false,
                error: action.payload,
            }
        case PostsActionTypes.FETCH_ONE_POST:
            return {
                posts: state.posts,
                post:{},
                loading: true,
                error: null,
            }
        case PostsActionTypes.FETCH_ONE_POST_SUCCESS:
            return {
                posts: state.posts,
                post: action.payload,
                loading: false,
                error: null,
            }
        case PostsActionTypes.FETCH_ONE_POST_ERROR:
            return {
                posts: state.posts,
                post:{},
                loading: false,
                error: action.payload,
            }
        case PostsActionTypes.ADD_NEW_POST:
            return{
                posts: state.posts,
                post:{},
                loading:true,
                error: null,
            }
        case PostsActionTypes.ADD_NEW_POST_SUCCESS:
            console.log(state)
            return {
                posts: [...state.posts,action.payload],
                post: {},
                loading: false,
                error: null,
            }
        case PostsActionTypes.ADD_NEW_POST_ERROR:
            return {
                posts: [],
                post:{},
                loading: false,
                error: null,
            }
        case PostsActionTypes.DELETE_POST:
            return {
                posts: state.posts,
                post:{},
                loading: true,
                error: null
            }
        case PostsActionTypes.DELETE_POST_SUCCESS:{
            const {posts} = state;
            const {payload} = action
            const filterPost = posts.filter(({id} : any) => id !== payload)

            return {
                posts: filterPost,
                post:{},
                loading: false,
                error: null
            }
        }
        case PostsActionTypes.DELETE_POST_ERROR:
            return {
                posts: state.posts,
                post: {},
                loading: false,
                error: action.payload
            }
        case PostsActionTypes.ADD_COMMENT:
            return {
                posts: state.posts,
                post: state.post,
                loading: true,
                error: null
            }
        case PostsActionTypes.ADD_COMMENT_SUCCESS:{
            const comments = state.post.comments
            comments.push(action.payload)
            return {
                posts: state.posts,
                post: state.post,
                loading: false,
                error: null
            }
        }
        case PostsActionTypes.ADD_COMMENT_ERROR:
            return {
                posts: state.posts,
                post: state.post,
                loading: false,
                error: action.payload
            }

        default:
            return state
    }
}