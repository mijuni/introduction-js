const attendees = [];

/* function addAttendee(arr, position, deleteCount, newValue) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === position) {
      newArr.push(newValue);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}*/

function addAttendee(attendeeName) {
  // push methode
}

function removeAttendee(attendeeName) {
  // splice und findIncex methode (findIndex als function in function bauen)
}

/*function addAttendee(attendee) {
  if (attendee === attendees.includes(attendee)) {
    console.log("Attendee name already exists.");
  } else {
    return attendees.push(attendee);
  }
}

function removeAttendee(attendee) {
  for (let i = 0; i < attendees.length; i++) {
    if (attendees[i] === attendee) {
      attendees.splice(i, 1);
    } else {
      console.log("The passed in name doesn't exist in the attendees array");
    }
  }
}*/

function resetAttendeesArray() {
  attendees.length = 0;
}
