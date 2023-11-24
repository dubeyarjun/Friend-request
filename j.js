var naam = document.querySelector("h5");
var add = document.querySelector("#add");
var flag = 0;
add.addEventListener("click", function () {
  // console.log("hey")
  if (flag == 0) {
    naam.innerHTML = "Friends";
    naam.style.color = "green";
    add.innerHTML = "Remove Friend";

    // console.log("hey")
    flag = 1;
  } else {
    naam.innerHTML = "Stranger";
    naam.style.color = "red";
    add.innerHTML = "Add Friend";

    flag = 0;
  }
});
