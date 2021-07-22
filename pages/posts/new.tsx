import React from "react";

import FormAddPost from "../../components/FormAddPost/FormAddPost";

interface NewMessageProps{}

const NewMessage: React.FC<NewMessageProps> = () => (
        <>
           <FormAddPost />
        </>
    )


export default NewMessage;