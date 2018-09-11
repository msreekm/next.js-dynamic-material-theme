/* eslint-disable no-underscore-dangle */

import { SheetsRegistry } from 'jss';
import { createMuiTheme, createGenerateClassName } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import orange from '@material-ui/core/colors/orange';

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
  },
});
const theme2 = createMuiTheme({
  palette: {
    primary: {
      light: red[500],
      main: red[700],
      dark: red[900],
    },
    secondary: {
      light: orange[500],
      main: orange[700],
      dark: orange[900],
    },
  },
});
function createPageContext(newTheme) {
  return {
    theme : newTheme === 'dafault' ? theme2: theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new SheetsRegistry(),
    // The standard class name generator.
    generateClassName: createGenerateClassName(),
  };
}

export default function getPageContext(newTheme) {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext(newTheme);
  }
  const globalCacheName= `__INIT_MATERIAL_UI_${newTheme}__`

  // Reuse context on the client-side.
  if ( !global[globalCacheName] ) {
    global[globalCacheName]  = createPageContext(newTheme);
  }

  return global[globalCacheName] ;
}
