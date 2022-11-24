function isUpperCase(letter) {
  if (typeof letter === "string") {
    if (letter === letter.toLocaleUpperCase()) {
      return true;
    } else {
      return false;
    }
  }
}
