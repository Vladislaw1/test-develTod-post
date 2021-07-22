/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import {IPost} from "../../types/types";
import {useAppSelector} from "../../hooks/useStore";
import PostListEl from "../PostListEl/PostListEl";

import styles from './PostList.module.css'

const PostList: React.FC = () => {

    const posts: IPost[] = useAppSelector((state => state.posts.posts))


    return (
        <ul className={styles.postList}>
            {posts?.map(el => <PostListEl key={el.id} post={el}/>)}
        </ul>
    );
};

export default PostList;