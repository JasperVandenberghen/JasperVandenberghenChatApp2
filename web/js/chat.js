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
    friendListXML.open("GET", "/FriendsController", true);
    friendListXML.onreadystatechange = getData;
    friendListXML.send();
}

function addFriend(){
    var friendname = document.getElementById("addFriend").value;
    document.getElementById("addFriend").value = "";
    console.log(friendname);
    newFriend.open("POST", "/Controller?action=AddFriend",true);
    newFriend.send(friendname);
}


function changeStatus() {

    var status = document.getElementById("status").value;
    document.getElementById("status").value = "";
    nieuweStatus.open("POST", "Controller?action=ChangeStatus", true);
    nieuweStatus.send(status);
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
                tdStatus.innerText = serverResponse[i].status;

                row.appendChild(tdUsername);
                row.appendChild(tdStatus);
                tbody.appendChild(row);
            }
            setTimeout(getFriendList, 2000);
        }
    }
}