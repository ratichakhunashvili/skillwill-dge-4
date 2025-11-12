// dav1
// function replaceValue(str, valueToReplace, valueToReplaceWith) {
//   let result = "";
//   let i = 0;

//   while (i < str.length) {
//     let match = true;
//     for (let j = 0; j < valueToReplace.length; j++) {
//       if (str[i + j] !== valueToReplace[j]) {
//         match = false;
//         break;
//       }
//     }
//     if (match && valueToReplace.length > 0) {
//       result += valueToReplaceWith;
//       i += valueToReplace.length;
//     } else {
//       result += str[i];
//       i++;
//     }
//   }

//   return result;
// }
// console.log(replaceValue("hello world", "world", "Georgia"));

// dav2

// function didiasoebi(winadadeba) {
//   let sityvebi = winadadeba.split(" ");
//   let result = [];

//   for (let i = 0; i < sityvebi.length; i++) {
//     let sityva = sityvebi[i];

//     if (sityva.length > 0) {
//       let pirveliaso = sityva[0].toUpperCase();
//       let danarcheni = sityva.slice(1);
//       result.push(pirveliaso + danarcheni);
//     } else {
//       result.push(sityva);
//     }
//   }

//   return result.join(" ");
// }
// console.log(didiasoebi("me miyvars skillwilli"));

// dav3

function zrdismixedvit(users) {
  return users.sort(function (a, b) {
    return a.age - b.age;
  });
}
const users = [
  { name: "Lasha", age: 30 },
  { name: "Saba", age: 20 },
  { name: "Nika", age: 25 },
  { name: "Rati", age: 19 },
];

const dawyobili = zrdismixedvit(users);
console.log(dawyobili);
