"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("this is the enums practise");
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
const user1 = {
    email: "user@gmail.com",
    password: "123456",
    role: Roles.user,
};
const user2 = {
    email: "admin@gmail.com",
    password: "123456",
    role: Roles.admin,
};
const isAdmin = (user) => {
    const { email, password, role } = user;
    if (role === Roles.admin) {
        return "Yes, user is admin";
    }
    return "No, user is not admin";
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
//# sourceMappingURL=index.js.map