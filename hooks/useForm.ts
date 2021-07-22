import React, {useState} from "react";

export const useForm = (initialState : any, onSubmit: any ) =>{


    const [dataForm,setDataForm] = useState(initialState)

    const handleChange = (e: React.FormEvent<HTMLInputElement>):void =>{
        const {name,value} : {name:string, value:string} = e.currentTarget
        setDataForm({...dataForm,[name]:value})
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>):void =>{
        e.preventDefault()
        onSubmit(dataForm)
        reset()
    }

    const reset = (): void =>{
        setDataForm(initialState)
    }

    return [dataForm,handleChange ,handleSubmit]
}