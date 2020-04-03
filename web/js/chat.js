window.onload = getFriendList;
window.onload = getNewStatus;

var friendListXML = new XMLHttpRequest();
var nieuweStatus = new XMLHttpRequest();
var getStatus = new XMLHttpRequest();
var newFriend = new XMLHttpRequest();
var addFriendButton = document.getElementById("addButton");
addFriendButton.onclick = addFriend;

var changeStatusButton = document.getElementById("changeButton");
changeStatusButton.onclick = changeStatus;

function getFriendList(){
    friendListXML.open("GET", "Controller?action=ShowFriends", true);
    friendListXML.onreadystatechange = getData;
    friendListXML.send();
}

function addFriend(){
    var friendname = document.getElementById("addFriend").value;
    console.log(friendname);
    newFriend.open("POST", "Controller?action=AddFriend",true);
    var information =  encodeURIComponent(friendname);
    newFriend.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    newFriend.send("addFriend="+information);
    getFriendList();
}


function changeStatus() {

    var status = document.getElementById("changeStatus").value;
    nieuweStatus.open("POST", "Controller?action=ChangeStatus", true);
    var information =  encodeURIComponent(status);
    console.log(information)
    nieuweStatus.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    nieuweStatus.send("changeStatus="+information);
    console.log("here");
    getNewStatus();
}

function getNewStatus() {
    getStatus.open("GET", "Controller?action=ShowStatus", true);
    getStatus.onreadystatechange = showStatus;
    getStatus.send(null);
}

function showStatus() {
    if(getStatus.readyState === 4){
        if(getStatus.status === 200){
            var response = getStatus.responseText;

            var statusDiv = document.getElementById("status");
            statusDiv.innerText = response;
        }
    }
}





function getData() {
    if(friendListXML.status === 200){
        if(friendListXML.readyState === 4){
            console.log(friendListXML.responseText);
            var serverResponse = JSON.parse(friendListXML.responseText);
            var tbody = document.getElementsByTagName("TBODY")[0];
            console.log(serverResponse);
            // Clear tbody html
            tbody.innerHTML = "";

            // Update tbody
            for (var i = 0; i < serverResponse.length; i++) {
                console.log(Object.keys(serverResponse[i]));
                var row = document.createElement("TR");
                var tdUsername = document.createElement("TD");
                tdUsername.innerText = serverResponse[i].firstName;
                console.log(serverResponse.hasOwnProperty("firstName"));
                var tdStatus = document.createElement("TD");
                tdStatus.innerText = serverResponse[i].currentStatus;

                row.appendChild(tdUsername);
                row.appendChild(tdStatus);
                tbody.appendChild(row);
            }
            setTimeout(getFriendList, 20000);
        }
    }
}