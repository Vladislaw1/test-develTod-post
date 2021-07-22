import React, {useCallback} from "react";

import {useForm} from "../../hooks/useForm";
import {useAppDispatch} from "../../hooks/useStore";
import {addNewPost} from "../../store/actions/addNewPost";

import styles from "./FormAddPost.module.css"

const FormAddPost: React.FC = () => {
    const dispatch = useAppDispatch()

    const initialState = {
        title: "",
        body: ""
    }

    const onSubmit = useCallback((data) => dispatch(addNewPost(data)), [dispatch])
    const [dataForm, handleChange, handleSubmit] = useForm(initialState, onSubmit)


    return (
        <form className={styles.formAddPost} onSubmit={handleSubmit}>
            <label className={styles.label} htmlFor="1">Title
                <input
                    className={styles.inputForm}
                    id="1"
                    type='text'
                    name='title'
                    value={dataForm.title}
                    onChange={handleChange}
                    required
                />
            </label>
            <label className={styles.label} htmlFor="2">Content
                <textarea
                    className={styles.textAreaForm}
                    id="2"
                    name='body'
                    value={dataForm.body}
                    onChange={handleChange}
                    required
                />
            </label>
            <button type='submit'>Добавить</button>
        </form>
    );
}

export default FormAddPost;