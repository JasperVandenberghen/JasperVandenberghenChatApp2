window.onload = getFriendList;
var friendListXML = new XMLHttpRequest();


function getFriendList(){
    friendListXML.open("GET", "/FriendsController", true);
    friendListXML.onreadystatechange = getData;
    friendListXML.send();
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