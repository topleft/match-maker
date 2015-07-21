console.log("sanity check!");

// Ask (prompt) the user for the total number of students learning JavaScript
// For each student, ask the user for their name, phone number, and city. Create an object for each person. Add each object to an array. BONUS: add validation.
// Repeat steps 1 and 2 for mentors. Create a new array of objects. You should now have two arrays - one for students, the other for mentors.
// Print (alert) the total number of students, the number of mentors, and each person nicely formatted like so:
//
// Name: Michael Herman
// Phone Number: 415-514-6584
// City: Boulder


// who = string, person's position

function getInfo(who){
  var person = {};
  person.position = who;
  person.name = prompt(who+" Name: ");
  person.phone = prompt(who+" phone number: ");
  person.city = prompt(who+" City: ");
  return person;
}

function createPeople(num, who) {
  var people = [];
  for (var i = 0; i < num; i++) {
    people.push(getInfo(who));
  }
  return people;
}

function infoAlert(array, who) {
  alert("Number of "+who+": "+array.length);
  for (var i = 0; i < array.length; i++) {
    string = ("Name: "+array[i].name+"\n"+
              "Phone Number: "+array[i].phone+"\n"+
              "City: "+array[i].city);
    alert(string);
  }
}


// var numStudents = prompt("How many total students are learning javascript? ");
// infoAlert(createPeople(numStudents, "Student"), "Students");
//
// var numMentors = prompt("How many total mentors are teaching javascript? ");
// infoAlert(createPeople(numMentors, "Mentor"), "Mentors");


function createPeopleOption(who) {
  var people = [];
  var another = true;
  while(another) {
    people.push(getInfo(who));
    if((prompt("Another person?(y/n) ")).toLowerCase() === "n"){
      another = false;
    }
  }
  return people;
}

// infoAlert(createPeopleOption("Student"), "Students");

function createList(array) {
  // loop array
  for (var i = 0; i < array.length; i++) {
    console.log(array[i]);
    var list = document.createElement("ul");
    list.className = "person";
    // loop over key value pairs of object
    for (var key in array[i]) {
      var item = document.createElement("li");
      item.innerHTML = key.toString()+": "+array[i][key];
      list.appendChild(item);
    }
    // append one person's info to page
    (document.getElementsByTagName("body"))[0].appendChild(list);
  }
}

// returns array
createList(createPeopleOption('Students'));



// array = list of keys
// var keys = ["name", "phone-number", "city"]
//
//
// function createPersonList(object, keysArray, who) {
//   var personList = document.createElement("ul");
//   var array = []
//   for (i = 0; i < object.length; i++) {
//     var personItem = document.createElement("li");
//     personItem.innerHTML = object[keysArray[i]];
//     personList.appendChild(personItem);
//   }
//   return personList;
// };
//
// function appendList(array, keysArray, who){
//   for (var i = 0; i < array.length; i++) {
//     console.log(createPersonList(array[i], keysArray, who));
//     document.getElementByTagName("body").appendChild(createPersonList(array[i], keysArray, who));
//   }
//
// };
//
// appendList(createPeopleOption("Students"), keys, "Students");
