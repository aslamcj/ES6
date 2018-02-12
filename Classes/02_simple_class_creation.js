"use strict"

class  User {
  // Object Prameters
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;

  }
  // Creating Static methods
  static countUser() {
    console.log("there are 50 users");
  }
  // Object Methods
	register() {
	console.log(this.username+"is registered");
}
}

User.countUser(); // Static method which doesn’t require instantiation 

var emp1 = new User("aslam","aslamcj@gmail.com","test123");
var emp2 = new User("user","uesr@gmail.com","test124");
var emp3 = new User("sapient","sapient@gmail.com","test125");

emp1.register();
emp2.register();
emp3.register();
