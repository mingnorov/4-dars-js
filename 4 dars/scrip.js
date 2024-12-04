// let admin = prompt('ismingiz nma?');
// if(admin){
//     if choise = prompt(`salom ${admin}, siz ismingizni kotta kichik qilmoqchimisz?`)
//     if (admin === '1');{
//         alert
//     }

// }

let name = prompt("Ismingizni kiriting:"); 


let char = prompt("Bironta harf kiriting:");


if (name.includes(char)) {
  alert(`"${char}" harfi ${name} ismida bor.`);
} else {
  alert(`"${char}" harfi ${name} ismida yo'q.`);
}
