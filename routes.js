const nextRoutes = require('next-routes')

//   name - Route name
//   pattern - Route pattern (like express, see path-to-regexp)
//   page - Page inside ./pages to be rendered
//   theme - theme to apply for route
const routesMap =  
   [
    {name:'foo', page: "/foo", pattern: "", theme: "artemis" },
    {name:'bar', page: "/bar", pattern: "", theme: "traditional" },
    {name:'about', page: "/about", pattern: "", theme: "traditional" },
    {name:'root', page: "/", pattern: "", theme: "artemis" }
  ];

const routes = nextRoutes()

routesMap.forEach(route => {
    routes.add(route.name, route.page);
});

module.exports = {routesMap, routes};