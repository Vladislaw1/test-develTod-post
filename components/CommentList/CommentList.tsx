import React from 'react';

import {useAppSelector} from "../../hooks/useStore";
import {IPost} from "../../types/types";
import CommentListItem from "../CommentListItem/CommentListItem";

import styles from "./CommentList.module.css";

const CommentList: React.FC = () => {

    const post: IPost = useAppSelector((state => state.posts.post))

    return (
        <ul className={styles.commentList}>
            {post.comments.map(el => <CommentListItem key={el.id} comment={el}/>)}
        </ul>
    );
};

export default CommentList;