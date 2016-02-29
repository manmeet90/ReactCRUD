'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var HomeComponent = require('./components/home/HomeComponent');
var HeaderComponent = require('./components/header/HeaderComponent');
var CreateContactComponent = require('./components/contacts/CreateContactComponent');
var ContactDetailComponent = require('./components/contacts/ContactDetailComponent');
var EditContactComponent = require('./components/contacts/EditContactComponent');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var IndexRoute = require('react-router').IndexRoute;
var hashHistory = require('react-router').hashHistory;
var History = require('history');

var App = React.createClass({
  render: function() {
    return (
        <div>
          <HeaderComponent></HeaderComponent>
          <div>
            {this.props.children}
          </div>
        </div>

      );
  }
});

ReactDOM.render(
  <Router history={hashHistory}>
        <Route path="/" component={App}>
        <IndexRoute component={HomeComponent}/>
        <Route path="new" component={CreateContactComponent}/>
        <Route path="userdetail/:userId" component={ContactDetailComponent}/>
        <Route path="edit/:userId" component={EditContactComponent}/>
    </Route>
  </Router>
  , document.getElementById('app_container')
);
        

