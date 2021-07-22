/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "next/link";

import {useAppDispatch} from "../../hooks/useStore";
import {deletePost} from "../../store/actions/deletePost";
import {IPost} from "../../types/types";

import styles from "./PostListEl.module.css"

interface PostListProps {
    post: IPost
}

const PostListEl: React.FC<PostListProps> = ({post}) => {
    const dispatch = useAppDispatch()

    const {id, title, body} = post

    const handlerClick = (postId : any): void => dispatch(deletePost(postId))

    return (
        <li className={styles.postListItem} key={id}>
            <Link href="/posts/[postId]?_embed=comments" as={`/posts/${id}?_embed=comments`}>
                <a>
                    <p>{title}</p>
                    <p>{body}</p>
                </a>
            </Link>

            <button type="button" className={styles.btnDeletePost} onClick={()=>handlerClick(id)}>x</button>
        </li>
    )
}

export default PostListEl;