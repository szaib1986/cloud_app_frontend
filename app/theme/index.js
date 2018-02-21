import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { deepOrange200, orange500, amber900, white, blueGrey300 } from 'material-ui/styles/colors';
import { grey800 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        textColor: grey800,
        backgroundColor: orange500,
        primary1Color: amber900,
        primary2Color: deepOrange200
    },
    appBar: {
        height: 50
    },
    primary: {
        backgroundColor: orange500
    }
});

export default muiTheme;