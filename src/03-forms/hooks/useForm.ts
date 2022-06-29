import { useState } from "react";


export const UseForm =<T> (initState:T) => {

  
        const [formData, setFormData] = useState(initState);
      
       
        const onChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
            setFormData((prev) => ({
            ...prev,
            [evt.target.name]: evt.target.value,
          }));
        };

        const isValidEmail = ( email: string ) => {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }

        const resetForm = () => {
            setFormData({...initState})
        }

    return {
        ...formData,
        formData,
        onChange,
        resetForm,
        isValidEmail,
    }
}