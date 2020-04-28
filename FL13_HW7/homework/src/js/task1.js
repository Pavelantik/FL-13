const minLoginLength = 4;
const switchGreeting = 20;
let users = {
    User: 'UserPass',
    Admin: 'RootPass'
}
let userLogin = prompt('Enter your login','');
if (!userLogin) {
    alert('Canceled');
} else {
    if (userLogin.length<minLoginLength) {
        alert("I don't know any users having name length less than 4 symbols");
    } else {
        if (users.hasOwnProperty(userLogin)){
            let userPassword= prompt('Enter your password');
            if (!userPassword) {
                alert('Canceled');
            } else{
                console.log(userLogin);
                console.log(users.userLogin);
                console.log(users.User);
                if (userPassword === users[userLogin]) {
                    let time= new Date().getHours();
                    time<switchGreeting ? alert(`Good day, dear ${userLogin}!`):
                    alert(`Good evening, dear ${userLogin}!`);
                } else {
                    alert('Wrong password');
                }
            }
        } else{
            alert('I don’t know you');
        }
    }
}