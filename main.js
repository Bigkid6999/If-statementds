// KF Panda Search

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let name = document.getElementById("char-in").value;
  console.log("name");
  if (name === "Po") {
    document.getElementById(char-name).innerHTML = "Po";
    document.getElementById(char-quote).innerHTML = "Buddy I am the dragon warrior ";
    document.getElementById(char-img).src = "img/po.png"
  } else if (name === ("Tigress")) {
    document.getElementById(char-name).innerHTML = "Tigress";
    document.getElementById(char-quote).innerHTML = "That was hard core ";
    document.getElementById(char-img).src = "img/tigress.png"
  } else if (name === ("Mantis")) {
    console.log("Yes Mantis  is a kung fu panda character")

  }else {
    console.log("?")
  } 
}
