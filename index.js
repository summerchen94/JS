//Love Calculator//

let youName = prompt("Your name is ");
let partnerName = prompt("Your partner's name is ");
let calcuNumber = Math.floor(Math.random() * 100) + 1;
console.log(`${youName} ❤️ ${partnerName} ${calcuNumber}%`);
alert(`${youName} ❤️ ${partnerName} ${calcuNumber}%`);

//Leap Year//
let year = prompt("Input the year: ");
if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      console.log(`${year} is a leap year`);
    } else {
      console.log(`${year} is not a leap year`);
    }
  } else {
    console.log(`${year} is a leap year`);
  }
} else {
  console.log(`${year} is not a leap year`);
}
