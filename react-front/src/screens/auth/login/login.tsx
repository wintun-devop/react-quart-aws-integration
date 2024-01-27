import React,{useContext} from 'react';
import { 
    // FormProvider, 
    useForm 
} 
from "react-hook-form";
import { 
    Avatar,
     Grid, 
     Paper,
     Box,
     Typography,
     Button
} from '@mui/material';
import { FormInputTextField } from '../../../components/custom-hook-form-components/form-input-text-filed';
import LockPersonIcon from '@mui/icons-material/LockPerson';
// Auth
import { AuthContext } from '../../../context/auth-context';
import axios from "axios";
import { useNavigate } from 'react-router-dom';


    interface IFormInput {
        emailValue: string;
        passwordValue:string;
        // radioValue: string;
        // checkboxValue: string[];
        // dateValue: Date;
        // dropdownValue: string;
        // sliderValue: number;
    }
    
    
    const defaultValues = {
        emailValue: "",
        passwordValue:"",
        // radioValue: "",
        // checkboxValue: [],
        // dateValue: new Date(),
        // dropdownValue: "",
        // sliderValue: 0,
    };
    


const Login = () =>{
    const {authenticated,setAuthenticated}=useContext(AuthContext);
    const {authData,setAuthData}=useContext(AuthContext);
    const methods = useForm<IFormInput>({ defaultValues: defaultValues });
    const navigate = useNavigate()
    console.log(authData)
    console.log(authenticated)
    const { 
        handleSubmit, 
        reset, 
        control, 
        // setValue, 
        // watch 
    } = methods;

    const loginSubmit =async (data: IFormInput) => {
        // console.log(data)
        const {emailValue,passwordValue} = data;
        const user_email = emailValue;
        const user_password = passwordValue;
        // console.log({user_email,user_password})
        // axios.post("http://127.0.0.1:5000/api/v1/auth/login",{user_email,user_password})
        // .then(r=>{
        //     const {data:{authenticated,...rest}} = r
        //     console.log("inside",authenticated)
        //     console.log("inside",rest)
        //     setAuthenticated(authenticated)
        //     setAuthData(rest)
        //     navigate('/')
        // })
        // .catch(e=>console.log("error",e))
        try{
            const result = await axios.post("http://127.0.0.1:5000/api/v1/auth/login",{user_email,user_password});
            if(result.status===201){
                setAuthenticated(result.data.authenticated);
                setAuthData(result.data)
                navigate('/')
            }
        }catch(e){
            console.log("error",e)
        }
    }
    return(
    <Box 
    sx={{
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
    }}
    > 
        <Paper elevation={10} 
        style={{padding:20,height:'auto',width:280,margin:"20px auto",alignItems: 'center' }}
        >
            {/* Avatar icon */}
            <Grid item xs={12} style={{ justifyContent: "center", display: "flex",margin: "20px auto"}} >
                <Avatar style={{backgroundColor:'#8675af'}} ><LockPersonIcon /></Avatar>
            </Grid>
            {/* Sing in text */}
            <Grid item xs={12} style={{ justifyContent: "center", display: "flex" ,margin: "20px auto"}} >
                <Typography>Sign in</Typography>
            </Grid>
            {/* form and labels */}
            <Grid item xs={12} style={{ justifyContent: "center", display: "flex" ,margin: "40px auto"}} >
            <FormInputTextField  name="emailValue" control={control} label="Email" type="text" />
            </Grid>
            <Grid item xs={12} style={{ justifyContent: "center", display: "flex" ,margin: "40px auto"}} >
            <FormInputTextField  name="passwordValue" control={control} label="Password" type="password" />
            </Grid>
            <Button onClick={handleSubmit(loginSubmit)} variant={"contained"}>
            {" "}
            Login
            {" "}
            </Button>
            <Button onClick={() => reset()} variant={"outlined"} style={{margin:10}}>
            {" "}
            Reset
            {" "}
            </Button> 
        </Paper>
    </Box>
    
    )

}

export default Login;