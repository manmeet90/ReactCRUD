'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ContactForm = require('./ContactForm');
var userService = require('../../services/userService');

var CreateContactComponent = React.createClass({
    getInitialState: function () {
        return {user:{}};
    },
    render : function(){
        return (
            <div>
                <ContactForm user={this.state.user} actionName="CREATE" title="Create New Contact" />
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

module.exports = CreateContactComponent;