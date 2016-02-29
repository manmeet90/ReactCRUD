'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var userService = require('../../services/userService');

var ContactDetailComponent = React.createClass({
    getInitialState: function () {
        return {user:{}};
    },
    render : function(){
        var user = this.state.user;
        return (
            <div className="user-detail">
                <h4>User Details</h4>
                <p>Id: {user.id}</p>
                <p>Name: {user.name}</p>
                <p>Phone Number: {user.phone}</p>
                <p>Website: {user.website}</p>
                <p>Email ID: {user.email}</p>
            </div>
        );
    },
    componentDidMount: function(){
        var userId = this.props.params.userId;

        userService.getAllUsers()
            .done($.proxy(function(users){
                var selectedUserDetails = users.find(function(user){
                    return user.id == userId;
                });
                this.setState({user:selectedUserDetails});
            }, this));
    }
});

module.exports = ContactDetailComponent;