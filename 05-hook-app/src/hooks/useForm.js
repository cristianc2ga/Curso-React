import { useState } from "react";

const useForm = (initialform = {}) => {
    const [formState, setFormState] = useState(initialform);

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    };

    const onResetForm = () =>{
        setFormState(initialform);
    }
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }
}

export default useForm
