var userService ={

	USER_RESOURCE : "http://jsonplaceholder.typicode.com/users",
    users:[],
    setUsers : function (users) {
        userService.users = users;
    },
    saveUser : function(user){
        if(user && user.id){
            var selectedUser = _.find(userService.users, function (userObj) {
                return userObj.id == user.id;
            });

            if(selectedUser){
                selectedUser.name = user.name;
                selectedUser.phone = user.phone;
                selectedUser.email = user.email;
                return true;
            }else{
                alert("user not found!");
                return false;
            }
        }else{
            user.id = (parseInt(userService.users[userService.users.length-1].id)+1);
            userService.users.push(user);
            return true;
        }
    },
	getAllUsers : function(){
        var self = this;
        var dfd = $.Deferred();
        if(userService.users && userService.users.length==0){
            this.fetchUsers(dfd);
        }else{
            dfd.resolve(this.users);
        }
        return dfd.promise();
	},

    fetchUsers : function (dfd) {
        $.ajax({
            method:"GET",
            url:this.USER_RESOURCE
        }).done(function(response){
            userService.users = response;
            dfd.resolve(response);
        }).fail(function(response){
            dfd.reject(response);
        });
    }
};

module.exports = userService;