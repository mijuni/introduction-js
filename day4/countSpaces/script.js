function countSpaces(gap) {
  if (typeof gap === "string") {
    const spaces = gap.split(" ");
    console.log(spaces);
    return spaces.length - 1;
  }
}
