
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
      <Route path="/" handler={Components.App}>

        <Route path="app/" handler={Components.SidebarView}>
          <Route name="reporting" path="reporting" handler={Components.Reporting}/>
          <Route name="autobidding" path="autobidding" handler={Components.AutoBidding}/>
          <Route name="managed" path="managed" handler={Components.Managed}/>

          <NotFoundRoute handler={Components.NotFound} />
        </Route>


        <DefaultRoute handler={Components.Index} />

        <NotFoundRoute handler={Components.NotFound} />
      </Route>
    );

    // <Route name="state" path="state/:abbr" handler={State}/>

    Router.run(routes, function (Handler) {
      React.render(<Handler/>, document.body);
    });
});