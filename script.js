"use strict";

let check = document.getElementById("checkBtn");
let address = document.getElementById("inputAddress");
let output = document.getElementById("totalWlNum");

check.addEventListener("click", function () {
  if (address.innerText === String("0x0986543214ba")) {
    output.innerHTML = `Congrats! Your address ${address.innerText} is whitelisted`;
  } else if (address.innerText === "") {
    output.innerHTML = `Field can't be empty`;
  } else if (address.innerText === String("0x0286843214re")) {
    output.innerHTML = `Congrats! Your address ${address.innerText} is whitelisted`;
  } else if (address.innerText === String("0x8902768g782a")) {
    output.innerHTML = `Congrats! Your address ${address.innerText} is whitelisted`;
  } else {
    output.innerHTML = `Oops! the address you entered isn't whitelisted, please recheck it`;
  }
});
