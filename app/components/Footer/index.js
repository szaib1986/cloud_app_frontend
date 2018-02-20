import React from 'react';
import { render } from "react-dom";
import TextField from 'material-ui/TextField';
import { cyan500, orange500, amber900, white, amber100 } from 'material-ui/styles/colors';
import { indigo200 } from 'material-ui/styles/colors';
const Footer = (props) => {
    const styles = {
        // backgroundColor: indigo200
    }
    return (
        <div className="footer" style={styles}>
            CopyRight &copy; 2018 www.talentohire.com
        </div>
    )
}

export default Footer;