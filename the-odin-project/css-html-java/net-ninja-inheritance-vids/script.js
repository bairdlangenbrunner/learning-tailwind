function User(email, name) {
  this.email = email;
  this.name = name;
  this.online = false;
}

User.prototype.login = function () {
  this.online = true;
  alert(`${this.name} has logged in`);
};

User.prototype.logout = function () {
  this.online = false;
  alert(`${this.name} has logged out`);
};

// args puts all arguments in an array
function Admin(...args) {
  console.log(args);
  // User.apply(this, [email, name]);
  User.apply(this, args) // creates new users and attaches values
  this.role = 'super' // only admin has this role
}

Admin.prototype = Object.create(User.prototype)
// Object.setPrototypeOf(Admin, User)

// add additional functionality just to admin prototype
Admin.prototype.deleteUser = function(u) {
  users = users.filter(user => {
    user.email != u.email; // if emails match, false, otherwise true
  })
}

// Admin.prototype.login()

const user1 = new User(
  (email = "langenbrunner@gmail.com"),
  (name = "Baird Langenbrunner")
);

const user2 = new User(
  email = 'another@gmail.com',
  name = 'Other User'
)
const admin1 = new Admin("other@gmail.com", "Other Person");
// user1.login();
// user1.logout();

// create admin class that inherits
// admin is still a user but has MORE functions?

let users = [user1, user2, admin1]

console.log(user1)
console.log(user1.role)
console.log(admin1)
admin1.login()
admin1.deleteUser(users[0])
console.log(users)