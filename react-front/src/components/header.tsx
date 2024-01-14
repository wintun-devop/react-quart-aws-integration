import React from 'react';
import { Typography,AppBar,Toolbar } from '@mui/material';
import { headerImages } from '../const/header-images';


const Header:React.FC = () =>{
    return(
        <AppBar color='transparent' position='static'>
            <Toolbar>
            <img src={headerImages.logo} style={{width: '30', marginRight:10}}/>
            <Typography>MyBiz</Typography>
            </Toolbar>
        </AppBar>
    )
}


export default Header;