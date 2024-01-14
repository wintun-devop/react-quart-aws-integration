import React from 'react';
import { Box } from '@mui/material';
import MainTab from '../../components/main-tab';
import Header from '../../components/header';


const Dashboard:React.FC = () =>{
    return(
       <Box>
            <Header />
            <MainTab />
       </Box>
    )

}

export default Dashboard;