import {useState, } from 'react';
import { Navigate, useNavigate} from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Cookies from 'js-cookie'
import Button from '@mui/material/Button'
import {FormDiv} from './styledComponents'









const Login = () =>{

    const [username,setUsername] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate()
    

    const onClickLogin = (event) =>{
        event.preventDefault()

        if(username !== undefined && password !== undefined){
            Cookies.set('loggedin',true)
            navigate('/', { replace: true })
            
            
        }
        else{
            alert("Username and Password cannot be empty")
        }
    }

    const onChangeUsername =(event)=>setUsername(event.target.value)
    const onChangePassword =(event)=>setPassword(event.target.value)

    const logIn = Cookies.get('loggedin')

    return(
       

        <div>
             {logIn && <Navigate to="/" replace/>}
            <FormDiv onSubmit={onClickLogin}>
            <TextField  label="Username" variant="outlined" placeholder='Username' margin="normal" onChange={onChangeUsername} value={username}/>
            <TextField  label="Password" variant="outlined" placeholder='Password' type="password" margin="normal" onChange={onChangePassword} value={password}/>
            <Button type="submit" variant="contained">Login</Button>
            </FormDiv>
        </div>
    )

    



}

export default Login