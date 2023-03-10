import { useEffect, useState } from "react"
import Message from "./Message";

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'cga',
        email: 'cga@gmail.com',
    });

    const { username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        })
    };
//se recomienda hacer efectos especificos
    // useEffect(() => {
      
    // }, [])
    
  return (
    <>
      <h1>Formulario simple</h1>
      <hr/>
      <input
        type='text'
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type='email'
        className="form-control mt-2"
        placeholder="cristian@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    {
        username === 'cga' && <Message/>
    }
    </>
  )
}

export default SimpleForm
