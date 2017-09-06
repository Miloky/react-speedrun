
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import App from './containers/app/app.jsx';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {blueGrey600, blueGrey400, blueGrey800, orange800, blueGrey100, grey700, darkBlack, white, grey300, fullBlack} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const target = document.querySelector('#root')
const muiTheme = getMuiTheme({
  palette: {
    primary1Color: blueGrey600,
    primary2Color: blueGrey400,
    primary3Color: blueGrey800,
    accent1Color: orange800,
    accent2Color: blueGrey100,
    accent3Color: grey700,
    textColor: darkBlack,
    alternateTextColor: white,
    canvasColor: white,
    borderColor: grey300,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: blueGrey600,
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
  appBar: {
    height: 50,
  },
});
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
    <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <App />
        </div>
      </MuiThemeProvider>
    </ConnectedRouter>
  </Provider>,
  target
)
