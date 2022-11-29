const johnsData = {
  firstName: "John",
  surName: "Doe",
  age: 28,
  city: "Hamburg",
  children: ["Mia", "Fynn"],
  hobbies: ["Football", "Playing Guitar"],
};

console.log(johnsData.firstName);
console.log(johnsData.surName);

function fullName(allName) {
  allName = johnsData.firstName + " " + johnsData.surName;
  return allName;
}

function changeJohnsData(propName, propValue) {
  johnsData[propName] = propValue;
  if (propName !== propValue) {
    console.log(
      "Sorry the passed in argument doesn't exists as a property in the johnsData object"
    );
  }
}

/*const propertyValues = Object.values(johnsData);
console.log(propertyValues);*/
