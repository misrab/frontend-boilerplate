// var React = require('react');
// var Router = require('react-router');

require(['react', 'react-router'], function(React, Router) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".

    console.log("running main");

    var Route = Router.Route;
    var DefaultRoute = Router.DefaultRoute;
    var RouteHandler = Router.RouteHandler;
    var Link = Router.Link;

    var App = React.createClass({displayName: "App",
      getInitialState: function () {
        console.log("running react");

        return {};
      },

      render: function () {
        return (
          React.createElement("div", {className: "App"}, 
            React.createElement(RouteHandler, null)
          )
        );
      }
    });

    var Index = React.createClass({displayName: "Index",
      render: function () {
        return React.createElement("p", null, "Select a state from the left");
      }
    });


    var routes = (
      React.createElement(Route, {handler: App}, 
        React.createElement(DefaultRoute, {handler: Index})
      )
    );

    // <Route name="state" path="state/:abbr" handler={State}/>

    Router.run(routes, function (Handler) {
      React.render(React.createElement(Handler, null), document.body);
    });
});