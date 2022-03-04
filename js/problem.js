// Problem #6

// let ason = 6;
// let bson = 7;
// let cson = 8;

// if (ason < bson && cson < bson) {
//  console.log(bson);
// } else if (bson < ason && cson < ason) {
//   console.log(ason);
// } else if (ason < cson && bson < cson) {
//   console.log(cson);
// } else  {
//   console.log('hammasi teng')
// }


// Problem #7


// let ason = 3;
// let bson = 5;
// let cson = 10;

// if (ason + bson > cson && bson + cson > ason && ason + cson > bson) {
//   console.log('Yes')
// } else {
//   console.log('No')
// }


// Problem #8

// let ason = 7;
// let bson = 6;
// let cson = 5;

// if (ason == bson && ason == cson || bson == ason && bson == cson || cson == bson && ason == cson) {
//   console.log('Teng tamonli');
// }
// else if (ason == bson || bson == cson || cson == ason) {
//   console.log('Teng yonli');
// }
// else {
//   console.log('Turli tamonli');
// }


// Problem #9

// let ason = 3;
// let bson = 5;
// let cson = 4;

// if (ason * ason + bson * bson == cson * cson || cson * cson + bson * bson == ason * ason || ason * ason + cson * cson == bson * bson) {
//   console.log('Yes');
// }
// else {
//   console.log('No');
// }


// Problem #10

// let ason = 0;

// if (ason == 1) {
//   console.log('Bosh barmoq');
// }
// else if (ason == 2) {
//   console.log("Ko'rsatkich barmoq");
// }
// else if (ason == 3) {
//   console.log("O'rta barmoq");
// }
// else if (ason == 4) {
//   console.log("Nomsiz barmoq");
// }
// else if (ason == 5) {
//   console.log("Kichik barmoq");
// }
// else {
//   console.log("Noto'g'ri ma'lumot kiritildi");
// }


// Problem #11

// let ason = 567145;
// let bson = 0;

// while (ason != 0) {
//   bson += ason % 10;
//   ason = Math.floor(ason / 10);
// }

// console.log(bson);


// Problem #12

// let ason = 9;
// let result = 0;
// for(let i = 1; i <= ason; i++){
//   result += i
// }
// console.log(result);

// Problem #13

// let ason = 10;
// let result = 0;
// for(let i = 1; i <= ason; i++){
//   if (i % 2 == 0) {
//     result += i;
//   }
// }
// console.log(result);


// Problem #16

// let ason = 14502;
// let bson = 0;
// let cson = 0;
// while (ason != 0) {
//   bson = ason % 10;

//   if (bson > cson) {
//     cson = bson;
//   }
//   ason = Math.floor(ason / 10)
// }

// console.log(cson);


// Problem #17

// let ason = 3423765;
// let cson = 7;
// let count = 0;
// let bson = 0;
// while (ason != 0) {
//   bson = ason % 10;

//   if (bson < cson) {
//     count++;
//   }
//   ason = Math.floor(ason / 10)
// }

// console.log(count);


