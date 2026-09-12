console.log("this is the enums practise");
enum Roles {
  user = "user",
  admin = "admin",
}

type LoginDetails = {
  name?: string;
  email: string;
  password: string;
  role: Roles;
};
const user1: LoginDetails = {
  email: "user@gmail.com",
  password: "123456",
  role: Roles.user,
};
const user2: LoginDetails = {
  email: "admin@gmail.com",
  password: "123456",
  role: Roles.admin,
};

const isAdmin: (user: LoginDetails) => string = (user) => {
  const { email, password, role } = user;
  if (role === Roles.admin) {
    return "Yes, user is admin";
  }
  return "No, user is not admin";
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
