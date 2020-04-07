var name = ""
var role = ""
var date = ""
var rate = ""

var config = {
    apiKey: "AIzaSyC0DWE1pTO0iWUnd1yBb-92wuSfmb1FW9g",
    authDomain: "uw-bootcamp-bw.firebaseapp.com",
    databaseURL: "https://uw-bootcamp-bw.firebaseio.com",
    projectId: "uw-bootcamp-bw",
    storageBucket: "uw-bootcamp-bw.appspot.com"
    };
    firebase.initializeApp(config);
    var database = firebase.database();

$("#add-employee").on("click", function(){

    name = $("#name-input").val().trim()
    role = $("#role-input").val().trim()
    date = $("#example-date-input").val()
    rate = $("#rate-input").val().trim()

    console.log(date)
    console.log(name)

    database.ref().push({
        name: name,
        role: role,
        dateStarted: date,
        rate: rate
      });

})