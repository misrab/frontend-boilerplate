require([], function() {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".

    console.log("running main");
});

// var React = require('react');
// var Router = require('react-router');
// // var { Route, DefaultRoute, RouteHandler, Link } = Router;


// var App = React.createClass({
//   getInitialState: function () {
//     console.log("running react");

//     return {};
//   },

//   render: function () {
//     return (
//       <div className="App">
//         <RouteHandler/>
//       </div>
//     );
//   }
// });

// var Index = React.createClass({
//   render: function () {
//     return <p>Select a state from the left</p>;
//   }
// });


// var routes = (
//   <Route handler={App}>
//     <DefaultRoute handler={Index}/>
//     // <Route name="state" path="state/:abbr" handler={State}/>
//   </Route>
// );

// Router.run(routes, function (Handler) {
//   React.render(<Handler/>, document.body);
// });