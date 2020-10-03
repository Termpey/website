import React, { Component } from 'react';
import {AppBar, IconButton, Box, Typography, Toolbar} from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import './ParentBar.css';

class ParentBar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <AppBar position="static" display="flex" color="">
                <Toolbar>
                    <Box className="justifyLeft">
                        <Typography>
                            Connor Trempe
                         </Typography>
                    </Box>
                    <Box className="justifyRight">
                        <IconButton href="mailto:connortrempe00@gmail.com?">
                            <EmailIcon/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        );
    }
}

export default ParentBar;