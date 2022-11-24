/* function evenLettersToUpperCase(str) {
  if (str && typeof str === "string") {
    str = str.toLocaleLowerCase();
    let result = "";
    for (let i = 0; i < str.length; i++) {
      if (i % 2 === 1) {
        result += str[i].toLocaleUpperCase();
      } else {
        result += str[i];
      }
    }
  }
}

return result; */

//0123456 usw. 0 = gerade, 1 = ungearde
//Foobar

function evenLettersToUpperCase(str) {
  if (typeof str === "string") {
    str = str.toLocaleLowerCase();
    //console.log(str);
    let up = 0;
    for (let i = 0; i < str.length; i++) {
      // console.log(str[i]);
      up += 1;
      if (up === 2) {
        up = 0;
        str[i].toLocaleUpperCase();
        console.log(up);
        console.log(str[i]);
        /* if (up === 0) {
          str[i].toLocaleUpperCase();
          
        } else {
          console.log(up);
          console.log(str[i]);
        } */
      }
      //console.log(up);
    }
    return str;
  }
}
/*for (let i = 0; i < str.length; i++) {
      if (i % 2 == 0) {
        console.log(str[i].toLocaleUpperCase());
      } 
    }
  }
}

console.log(); */
