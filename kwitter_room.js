var firebaseConfig = {
      apiKey: "AIzaSyDf8PL96qaeDUEpbJcLtGproglGkdsilrA",
      authDomain: "kwitter-871dc.firebaseapp.com",
      databaseURL: "https://kwitter-871dc-default-rtdb.firebaseio.com",
      projectId: "kwitter-871dc",
      storageBucket: "kwitter-871dc.appspot.com",
      messagingSenderId: "415478347660",
      appId: "1:415478347660:web:40290c261019d35ccc48a9",
      measurementId: "G-HDC3P89LHM"
    };
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";    

function add_room()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
      localStorage.setItem("room_name", room_name);
      window.location = "messsage.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location ="message.html";
}
      function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}