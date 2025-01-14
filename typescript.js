var UserInfo = require("./types").UserInfo;
var user = {
    names: 'missy',
    age: 23,
    actions: function () { return 'walking'; },
};
var userArrays = [user];
userArrays.map(function (u) {
    console.log(u.names, u.age, u.actions());
});
