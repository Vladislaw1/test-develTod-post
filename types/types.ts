export interface IPost {
    id: string | number;
    title: string;
    body: string
    comments: [{
        id: string | number,
        body: string,
        postId: string | number
    }]}