
require(['./components/index', 'react', 'react-router', 'jquery'], 
function(Components, React, Router, $) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".


    var Route = Router.Route;
    var DefaultRoute = Router.DefaultRoute;
    var NotFoundRoute = Router.NotFoundRoute;
    
    var Link = Router.Link;


    var routes = (
      React.createElement(Route, {path: "/", handler: Components.App}, 

        React.createElement(Route, {path: "app/", handler: Components.SidebarView}, 
          React.createElement(Route, {name: "reporting", path: "reporting", handler: Components.Reporting}), 
          React.createElement(Route, {name: "autobidding", path: "autobidding", handler: Components.AutoBidding}), 
          React.createElement(Route, {name: "managed", path: "managed", handler: Components.Managed}), 

          React.createElement(NotFoundRoute, {handler: Components.NotFound})
        ), 


        React.createElement(DefaultRoute, {handler: Components.Index}), 

        React.createElement(NotFoundRoute, {handler: Components.NotFound})
      )
    );

    // <Route name="state" path="state/:abbr" handler={State}/>

    Router.run(routes, function (Handler) {
      React.render(React.createElement(Handler, null), document.body);
    });
});