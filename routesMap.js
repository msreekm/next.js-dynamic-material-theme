const routesMap =  
   [
    {name:'foo', page: "/foo", pattern: "", theme: "artemis" },
    {name:'bar', page: "/bar", pattern: "", theme: "traditional" },
    {name:'about', page: "/about", pattern: "", theme: "artemis" },
    {name:'root', page: "/", pattern: "", theme: "traditional" }
  ];

//   name - Route name
//   pattern - Route pattern (like express, see path-to-regexp)
//   page - Page inside ./pages to be rendered

module.exports = routesMap;
