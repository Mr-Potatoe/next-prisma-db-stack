const { UserInfo } = require(`./types`)

let user: UserInfo = {
    names : 'missy',
    age : 23,
    actions: () => 'walking', 
}

let userArrays = [user];

userArrays.map(u => {
    console.log(u.names,u.age,u.actions());
});