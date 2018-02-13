//centralized way of ovverriding the Material UI theme
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { grey800, orange500, blueGrey300 } from 'material-ui/styles/colors';

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