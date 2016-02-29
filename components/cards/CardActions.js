'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var CardActions = React.createClass({
    render : function(){
        return (
        <div>
            <Link to={this.props.edit_link}><span className="glyphicon glyphicon-pencil"></span></Link>&nbsp;&nbsp;<span  data-id={this.props.userId} onClick={this.props.onDelete} className="glyphicon glyphicon-trash text-danger"></span>
        </div>
    );

    }
});

module.exports = CardActions;