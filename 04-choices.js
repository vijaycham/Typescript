
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
// enum is a type only allow certian kind of options
var userRole = 0; // 0 - admin, 1 - read only, 2 - author
console.log(userRole);
userRole = Role.READ_ONLY;
console.log(userRole);
