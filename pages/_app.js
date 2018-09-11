import React from 'react';
import App, { Container } from 'next/app';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import getPageContext from '../src/getPageContext';
import { withRouter } from 'next/router'
import routing from '../routes';

class MyApp extends App {
  constructor(props) {
    //console.log('App Constructor')
    super(props);
    // if(!this.pageContext) {
    //  this.pageContext = getPageContext('traditional');
    // }
  }

  pageContext = null;

  componentDidMount() {
    //console.log('App componentDidMount' ,this.props)
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }
 
  render() {
   //  //console.log('App render' ,this.props.router.route);
    const { Component, pageProps } = this.props;
    const routesMap = routing.routesMap;
    const currentRoute = routesMap.find( route => { return route.page === this.props.router.route }) ;
    console.log(currentRoute.theme ,this.props.router.route );

    if(currentRoute)
      this.pageContext = getPageContext(currentRoute.theme);
 
    return (
      <Container>
        {/* Wrap every page in Jss and Theme providers */}
        <JssProvider
          registry={this.pageContext.sheetsRegistry}
          generateClassName={this.pageContext.generateClassName}
        >
          {/* MuiThemeProvider makes the theme available down the React
              tree thanks to React context. */}
          <MuiThemeProvider
            theme={this.pageContext.theme}
            sheetsManager={this.pageContext.sheetsManager}
          >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {/* Pass pageContext to the _document though the renderPage enhancer
                to render collected styles on server side. */}
            <Component pageContext={this.pageContext} {...pageProps} />
          </MuiThemeProvider>
        </JssProvider>
      </Container>
    );
  }
}

export default withRouter(MyApp);
