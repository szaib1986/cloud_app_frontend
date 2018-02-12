import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { cyan500, orange500, amber900, white, blueGrey300 } from 'material-ui/styles/colors';
import { grey800 } from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    palette: {
        textColor: grey800,
        backgroundColor: orange500
    },
    appBar: {
        height: 50,
        backgroundColor: blueGrey300
    },
});

export default muiTheme;