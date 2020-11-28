import { createMuiTheme, rgbToHex } from '@material-ui/core'
import { blue, pink, teal } from '@material-ui/core/colors';
import React from 'react'

const theme = createMuiTheme({
    
    palette:{
        primary:{

            main: blue[500]
            
        },
        secondary:{
            main: teal[300]
        }

    }
    
});

export default theme