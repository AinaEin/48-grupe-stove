const stoves = document.getElementsByClassName("circle");

function toggle(btnIndex) {
  const stove = stoves[btnIndex];

  if (stove.classList.contains("red")) {
    stove.classList.remove("red");
    stove.classList.add("transparent");
  } else {
    stove.classList.add("red");
    stove.classList.remove("transparent");
  }
}
