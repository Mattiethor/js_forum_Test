
function userName() {
  const firstName = getInput("fName")
  const lastName = getInput("mName")
  let fullName = firstName + " " + lastName
  greeting(fullName)
}
//Gets user input from the html id tag. 
function getInput(inputId) {
  const input = document.getElementById(inputId).value;
  return input;
}

//Greets the user

function greeting(string) {
  let isNotEmpty = string.length > 1
  if (isNotEmpty) {
    const greeting = `Hello ${string}`;
    document.getElementById("userGreeting").innerHTML = greeting;
  } else {
    document.getElementById("userGreeting").innerHTML = "Please enter a name";
  }


}