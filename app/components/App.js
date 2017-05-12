var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');
var Movie = require('./Movie');
var Popular = require('./Popular');
var Results = require('./Results');
var MovieResults = require('./MovieResults');

class App extends React.Component {
  render () {
    return (
      <Router>
        <div className='container'>
          <Nav/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/battle' component={Battle}/>
              <Route path='/battle/results'component={Results}/>
              <Route exact path='/movie'component={Movie}/>
              <Route path='/movie/movieresults'component={MovieResults}/>
              <Route path='/popular' component={Popular}/>
              <Route render={function() {
                return <p>File Not Found :(</p>
              }} />
            </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;
