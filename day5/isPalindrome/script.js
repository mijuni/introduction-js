function isPalindrome(palin) {
  palin = palin.toLocaleLowerCase();
  let palinReverse = palin.split("").reverse().join("");
  if (palin === palinReverse) {
    return true;
  } else {
    return false;
  }
}

/* return palin
.split("")
.reverse()
.join("")
