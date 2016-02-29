'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var userService = require('../..//services/userService');
var CardsComponent = require('../cards/CardsComponent');

var HomeComponent = React.createClass({
	getInitialState: function(){
		return {
			users:[]
		}
	},
	componentDidMount: function(){
		this.getUsers();
	},
    getUsers : function () {
        $('#app_container').loadingOverlay();
        userService.getAllUsers()
            .done($.proxy(function(users){
                this.setState({users:users});
                $('#app_container').loadingOverlay('remove');
            }, this));
    },
    render : function(){
        return (
            <div>
	            <CardsComponent users={this.state.users} onDeleteUser={this.onDeleteUser} />
            </div>
        );
    },

    onDeleteUser: function () {
        this.getUsers();
    }
});

module.exports = HomeComponent;