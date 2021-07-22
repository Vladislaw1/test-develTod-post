import React from 'react';

import styles from "./CommentListItem.module.css"

interface PropsItem {
    comment: {
        body: string
    }
}

const CommentListItem: React.FC<PropsItem> = ({comment}) => (
        <li className={styles.commentListItem}>
            <p className={styles.text}>{comment.body}</p>
        </li>
    );


export default CommentListItem;