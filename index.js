//for (let age = 30; age < 40; age++) {
//  console.log(`I'm ${age} years old. Happy birthday to me!`);
//}

///const gifts = ["teddy bear", "drone", "doll"];

//function wrapGifts(gifts) {
  //for (let i = 0; i < gifts.length; i++) {
    //console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
 // }
  //return gifts;
//}

//wrapGifts(gifts)

function writeCards(name, event) {
  let thankYous =[]
    for (let i = 0; i < name.length; i++) {
        console.log(thankYous.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`))
       }
       return thankYous;
}

writeCards();



function countDown(dec) {
  let i=10
  while (i >= 0) {
    console.log(i);
    i--
 }
  return dec
}