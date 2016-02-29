'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var CardComponent = require('./CardComponent');
var userService = require('../../services/userService');

var CardsComponent = React.createClass({
    getInitialState: function () {
        return {users:this.props.users||[]};
    },
    render : function(){
    	var users = this.props.users;
        var self= this;

        return (
        	<div className="row">
	            {
	            	users.map(function(user){
	            		return <CardComponent key={user.id} user={user} onDelete={self.onDeleteIconClicked} />
	            	})
	            }
        	</div>
        );
    },
    onDeleteIconClicked: function (e) {
        var userId = parseInt($(e.currentTarget).attr('data-id'));
        var usersList = this.props.users;

        var idx = _.findIndex(usersList, function (user) {
            return user.id == userId;
        });
        if(idx >=0){
            usersList.splice(idx,1);
            userService.setUsers(usersList);
            this.props.onDeleteUser();
        }
    }
});

module.exports = CardsComponent;