let user_score = document.querySelector("#user");
let cpu_score = document.querySelector("#cpu");
let user = document.querySelectorAll(".user_left");
let cpu = document.querySelectorAll("#cpu_con");
let sat = document.querySelector("#sat");
sat.style.visibility = "hidden";

function disable_all() {
  user.forEach((users) => {
    users.disabled = true;
  });
}

function winner(cpu1, user1) {
  let output;
  if (cpu1 == user1) output = "draw";
  else if (user1 == 0) {
    if (cpu1 == 1) output = "lost";
    else output = "win";
  } else if (user1 == 1) {
    if (cpu1 == 2) output = "lost";
    else output = "win";
  } else if (user1 == 2) {
    if (cpu1 == 0) output = "lost";
    else output = "win";
  }
  return output;
}

user.forEach((users) => {
  users.addEventListener("click", () => {
    let move = Math.round(2 * Math.random());
    let move_user = users.getAttribute("id");
    cpu[move].classList.add("hover_up");
    disable_all();
    let ans = winner(move, move_user);
    console.log(ans);
    if (ans == "draw") {
      document.querySelector("*").style.opacity = "0.4";
      setTimeout(right_reset,1000);

    } else if (ans == "win") {
      user_score.innerText++;
      document.querySelector(".left").style.opacity = "0.1";
      document.querySelector(".left").style.backgroundColor="#656a70";
      setTimeout(left_reset,1000);
    } else if (ans == "lost") {
      cpu_score.innerText++;
      document.querySelector(".right").style.opacity = "0.1";
      document.querySelector(".right").style.backgroundColor=" #C68642";
      setTimeout(right_reset,1000);
    }
    sat.style.visibility = "visible";
    sat.innerText = ans;
  });
});

const right_reset=() => {
  for (let i = 0; i < 3; i++) {
    user[i].disabled = false;
    cpu[i].classList.remove("hover_up");
  }
  document.querySelector("*").style.opacity = "1";
  document.querySelector(".right").style.backgroundColor="";
  sat.style.visibility = "hidden";
  document.querySelector(".right").style.opacity = "1";

}

const left_reset= () => {
  for (let i = 0; i < 3; i++) {
    user[i].disabled = false;
    cpu[i].classList.remove("hover_up");
  }
  document.querySelector(".left").style.backgroundColor="";
  sat.style.visibility = "hidden";
  document.querySelector(".left").style.opacity = "1";

}
