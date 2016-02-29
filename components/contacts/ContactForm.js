'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var userService = require('../..//services/userService');
var CardsComponent = require('../cards/CardsComponent');

var ContactFormComponent = React.createClass({
    getInitialState: function () {
        return {
            user:{}
        };
    },

    componentWillReceiveProps: function (nextProps) {
        this.setState({user:nextProps.user});
    },
    render : function(){
        return (
            <div className="col-sm-12">
                <h2>{this.props.title}</h2>
                <form id="contactForm" className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="user_name" className="col-sm-3 control-label">Name</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" id="user_name" placeholder="Name" value={this.state.user.name} onChange={this.formDataChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="phno" className="col-sm-3 control-label">Phone Number</label>
                        <div className="col-sm-9">
                            <input type="text" className="form-control" id="phno" placeholder="Phone Number" value={this.state.user.phone} onChange={this.formDataChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="user_email" className="col-sm-3 control-label">Email ID</label>
                        <div className="col-sm-9">
                            <input type="email" className="form-control" id="user_email" placeholder="Email ID" value={this.state.user.email} onChange={this.formDataChange} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-3 col-sm-offset-3">
                            <button className="btn btn-primary" onClick={this.onActionButtonClicked}>{this.props.actionName}</button>
                        </div>
                    </div>
                </form>
            </div>
        );

    },
    formDataChange: function (e) {
        var viewModel = this.state.user;
        var currentTarget = $(e.currentTarget);
        if(currentTarget.attr('id') == "user_name"){
            viewModel.name= currentTarget.val();
        }else if(currentTarget.attr('id') == "phno"){
            viewModel.phone= currentTarget.val();
        }else if(currentTarget.attr('id') == "user_email"){
            viewModel.email= currentTarget.val();
        }
        this.setState({user:viewModel});
    },
    onActionButtonClicked: function(e){
        e.preventDefault();
        if(this.props.actionName == "CREATE"){
            this.saveUser();
        }else if(this.props.actionName == "EDIT"){
            this.saveUser();
        }else{
            alert("Invalid Action");
        }
    },
    saveUser: function () {
        var userObj = {
            name : $('#contactForm #user_name').val(),
            phone : $('#contactForm #phno').val(),
            email : $('#contactForm #user_email').val(),
        };

        if(this.isFormValid(userObj)){
            if(this.props.actionName == "EDIT"){
                userObj.id = this.state.user.id;
            }
            if(userService.saveUser(userObj)){
                var msg = this.props.actionName == "CREATE" ? "user created successfully!" : "user details saved successfully!";
                alert(msg);
            }
        }else{
            alert("Invalid form entries!");
        }
    },
    isFormValid: function (model) {
        if(!model.name || !model.phone || !model.email){
            return false;
        }

        return true;
    }

});

module.exports = ContactFormComponent;