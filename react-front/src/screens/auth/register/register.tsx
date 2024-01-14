import React from 'react';
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

interface IFormInput {
    emailValue: string;
    passwordValue:string;
    confirmPasswordValue:string;
    // radioValue: string;
    // checkboxValue: string[];
    // dateValue: Date;
    // dropdownValue: string;
    // sliderValue: number;
}


const defaultValues = {
    emailValue: "",
    passwordValue:"",
    confirmPasswordValue:"",
    // radioValue: "",
    // checkboxValue: [],
    // dateValue: new Date(),
    // dropdownValue: "",
    // sliderValue: 0,
};

const Register:React.FC = () =>{
    const methods = useForm<IFormInput>({ defaultValues: defaultValues });
    const { 
        handleSubmit, 
        reset, 
        control, 
        // setValue, 
        // watch 
    } = methods;

    const registerSubmit = (data: IFormInput) => {
        console.log(data)
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
                <Typography>Register</Typography>
            </Grid>
            {/* form and labels */}
            <Grid item xs={12} style={{ justifyContent: "center", display: "flex" ,margin: "20px auto"}} >
            <FormInputTextField  name="emailValue" control={control} label="Email" type="text" />
            </Grid>
            <Grid item xs={12} style={{ justifyContent: "center", display: "flex" ,margin: "20px auto"}} >
            <FormInputTextField  name="passwordValue" control={control} label="Password" type="password" />
            </Grid>
            <Grid item xs={12} style={{ justifyContent: "center", display: "flex" ,margin: "20px auto"}} >
            <FormInputTextField  name="confirmPasswordValue" control={control} label="Confirm Password" type="password" />
            </Grid>
            <Button onClick={handleSubmit(registerSubmit)} variant={"contained"}>
            {" "}
            Register
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

export default Register;