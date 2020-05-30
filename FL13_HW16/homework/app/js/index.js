const baseUrl = 'http://localhost:3000';
const appContainer = document.getElementById('app-container');

const requestSt_200 = 200;
const requestSt_201 = 201;
const requestSt_204 = 204;

//adding 'add new user' block
let mainTitle = document.createElement('h1');
mainTitle.textContent = 'Manage app'
appContainer.append(mainTitle);

let addNameField = document.createElement('input');
addNameField.type = 'text';
addNameField.placeholder = 'Username';
appContainer.append(addNameField);

let addFullNameField = document.createElement('input');
addFullNameField.type = 'text';
addFullNameField.placeholder = 'Full Name';
appContainer.append(addFullNameField);

let addUserButton = document.createElement('button');
addUserButton.type ='button';
addUserButton.textContent = 'Add New User';
appContainer.append(addUserButton);
addUserButton.addEventListener('click',doAddNewUser);

appContainer.append(document.createElement('br'));
appContainer.append(document.createElement('br'));

let loadingCaption = document.createElement('p');
loadingCaption.textContent = 'Loading...';
loadingCaption.className = 'loading-caption';
appContainer.append(loadingCaption);

let usersContainer = document.createElement('div');
usersContainer.className = 'users-container';
appContainer.append(usersContainer);

//getting users info
function reloadUsersList(){
    loadingCaption.style.display = 'block';
    usersContainer.innerHTML = '';
    const requestGet = new XMLHttpRequest();
    requestGet.open('GET',baseUrl+'/users');
    requestGet.responseType = 'json';
    requestGet.send();
    requestGet.onload = function (){
        loadingCaption.style.display = 'none';
        if (requestGet.status === requestSt_200){
            doPaintUsersList(requestGet.response);
        } else {
            usersContainer.innerText(`Error ${requestGet.status}: ${requestGet.statusText}`);
        }
    }
}

function doPaintUsersList (usersArray){
    usersArray.forEach(el => {
        let userId = document.createElement('input');
        userId.className = 'user-id';
        userId.value = el.id;
        userId.disabled = true;
        userId.size = 10;
        usersContainer.append(userId);

        let userFullName = document.createElement('input');
        userFullName.className = 'user-fullname';
        userFullName.value = el.name;
        usersContainer.append(userFullName);

        let userUsername = document.createElement('input');
        userUsername.className = 'user-username';
        userUsername.value = el.username;
        usersContainer.append(userUsername);
        
        let updateUserButton = document.createElement('button');
        updateUserButton.className = 'update-user-btn';
        updateUserButton.textContent = 'Update';
        updateUserButton.addEventListener('click', doUpdateUser);
        usersContainer.append(updateUserButton);

        let deleteUserButton = document.createElement('button');
        deleteUserButton.className = 'delete-user-btn';
        deleteUserButton.textContent = 'Delete';
        deleteUserButton.addEventListener('click', doDeleteUser);
        usersContainer.append(deleteUserButton);
        
        usersContainer.append(document.createElement('br'));
    });
}
reloadUsersList();

//adding a new user
function doAddNewUser(ev){
    ev.target.disabled = true;
    const requestAdd = new XMLHttpRequest();
    requestAdd.open('POST',baseUrl+'/users');
    requestAdd.setRequestHeader('Content-Type','application/json');
    const body = {
        name: addFullNameField.value,
        username: addNameField.value
    }
    requestAdd.send(JSON.stringify(body));
    requestAdd.onload = function (){
        ev.target.disabled = false;
        if (requestAdd.status === requestSt_201){
            reloadUsersList();
        } else {
            console.log(`Error ${requestAdd.status}: ${requestAdd.statusText}`);
        }
    }

}

//update user
function doUpdateUser(ev){
    ev.target.disabled = true;
    const userName = ev.target.previousElementSibling;
    const userFullName = userName.previousElementSibling;
    const usedId = userFullName.previousElementSibling;
    const body = {
        name: userFullName.value,
        username: userName.value
    }
    const updUrl = new URL(`/users/${usedId.value}`,baseUrl)
    const requestUpd = new XMLHttpRequest();

    requestUpd.open('PUT',updUrl);
    requestUpd.setRequestHeader('Content-Type','application/json');
    requestUpd.send(JSON.stringify(body));
    requestUpd.onload = function (){
        ev.target.disabled = false;
        if (requestUpd.status === requestSt_204){
            reloadUsersList();
        } else {
            console.log(`Error ${requestUpd.status}: ${requestUpd.statusText}`);
        }
    }
}

//delete user
function doDeleteUser(el){
    el.target.disabled = true;
    const usedId = el.target
        .previousElementSibling
        .previousElementSibling
        .previousElementSibling
        .previousElementSibling;

    const updUrl = new URL(`/users/${usedId.value}`,baseUrl)
    let requestDel = new XMLHttpRequest();
    requestDel.open('DELETE',updUrl);
    requestDel.setRequestHeader('Authorization','admin');
    requestDel.send();
    requestDel.onload = function (){
        el.target.disabled = false;
        if (requestDel.status === requestSt_204){
            reloadUsersList();
        } else {
            console.log(`Error ${requestDel.status}: ${requestDel.statusText}`);
        }
    }
}