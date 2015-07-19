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
  person.position = who
  person.name = prompt(who+" Name: ");
  person.phoneNumber = prompt(who+" phone number: ");
  person.city = prompt(who+" City: ");
  return person;
}

function createPeople(num, who) {
  var people = [];
  for (var i = 0; i < num; i++) {
    people.push(getInfo(who));
  }
  return people
};

function infoAlert(array, who) {
  alert("Number of "+who+": "+array.length);
  for (var i = 0; i < array.length; i++) {
    string = ("Name: "+array[i].name+"\n"+
              "Phone Number: "+array[i].phoneNumber+"\n"+
              "City: "+array[i].city);
    alert(string);
}
}


var numStudents = prompt("How many total students are learning javascript? ");
infoAlert(createPeople(numStudents, "Student"), "Student");

var numMentors = prompt("How many total mentors are teaching javascript? ");
infoAlert(createPeople(numMentors, "Mentor"), "Mentor");
