'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var userService = require('../../services/userService');
var Link = require('react-router').Link;
var CardActions = require('./CardActions');

var CardComponent = React.createClass({
    render : function(){
    	var user = this.props.user;
        var _link = '/userdetail/'+user.id,
            edit_link = '/edit/'+user.id,
            classList = "card col-md-4 col-sm-6 user-"+user.id;
        return (
            <div className={classList}>
                <div className="content">
                    <p>Name: <Link to={_link}>{user.name}</Link></p>
                    <p>Phone Number: {user.phone}</p>
                    <div><CardActions edit_link={edit_link} userId={user.id} onDelete={this.props.onDelete}></CardActions></div>
                </div>
            </div>
        );
    }
});

module.exports = CardComponent;