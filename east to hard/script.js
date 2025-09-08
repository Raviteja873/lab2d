function checkAccess() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let msg = "";

  if (!name || age === "") {
    msg = "Enter name and age.";
  } else if (age < 18) {
    msg = "Sorry " + name + ", not authorized.";
  } else {
    msg = "Welcome " + name + "!";
  }

  document.getElementById("result").innerText = msg;
}
