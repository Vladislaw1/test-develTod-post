import React, {useCallback} from "react";

import {useForm} from "../../hooks/useForm";
import {useAppDispatch} from "../../hooks/useStore";
import {addNewComment} from "../../store/actions/addNewComment";

import styles from "./FormAddComment.module.css"

interface FormProps {
    id: string | number
}

const FormAddComment: React.FC<FormProps> = ({id}) => {
    const dispatch = useAppDispatch()

    const initialState = {
        postId: Number(id),
        body: ""
    }

    const onSubmit = useCallback((data) => dispatch(addNewComment(data)), [dispatch])
    const [dataForm, handleChange, handleSubmit] = useForm(initialState,onSubmit)

    return (
        <form className={styles.formAddComment} onSubmit={handleSubmit}>
            <label htmlFor="1">
                <textarea
                    id="1"
                    className={styles.textarea}
                    onChange={handleChange}
                    value={dataForm.body}
                    name="body"
                    placeholder="Оставьте свой коментарий"
                    required
                >Добавить коментарий</textarea>
            </label>
            <button className={styles.btnAddComment} type="submit">Добавить</button>
        </form>
    )
}

export default FormAddComment