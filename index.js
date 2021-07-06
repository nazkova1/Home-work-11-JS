// My page
// мої улюблені сайти: google w3schools stackoverflow

// За допомогою JavaScript запропонувати користувачу вибрати стиль для сторінки. А саме:
// фон для сторінки
// тип шпифта на сторінці
// вирівнювання для заголовка h1
// фон для параграфа зі зсилками
// колір тексту у параграфі зі зсилками і для самих зсилок. При чому колір тексту для зсилок призначити у циклі
// колір, розмір, товщину тексту у елементі div
// тип маркера для маркованого списку на сторінці
// Таким чином слід запропонувати користувачу ввести десять налаштувань сторінки і застосувати їх.
// ДОДАТОК ДО ЗАВДАННЯ: замість зсилок на конкретні сайти, вивести у панелі навігації зсилки на три сайти, які вкаже користувач.
// Наприклад користувач у віконце prompt() ввів адресу football24.ua - в такому разі треба створити зсилку, яка вела б на сайт football24, а текстом цієї зсилки (тим, по чому можна клікнути) буде також football24.ua

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



document.querySelector('body');


const background = prompt("Please enter a color of this page : (red, black, white)");
if (background === "red") {
    document.body.style.background = "red";
} else if (background === "black") {
    document.body.style.background = "black";
} else if (background === "white") {
    document.body.style.background = "white";
}




const font = prompt("Please enter a type of font : (oblique, italic, normal)");
if (font === "oblique") {
    document.body.style.fontStyle = "oblique";
}
else if (font === "italic") {
    document.body.style.fontStyle = "italic";
}
else if (font === "normal") {
    document.body.style.fontStyle = "normal";
}




const centrik = prompt("Do you want to move h1 to the center? (yes or no)");
if (centrik === "yes") {
    document.getElementById("demo").style.textAlign = "center";
} else if (centrik === "no") {
    document.getElementById("demo").style.textAlign = "left";
}





const bgColor = prompt('Enter a color for paragraph')
document.getElementById("par").style.backgroundColor = bgColor;

let textColor = prompt('Enter color of the text');
      for(let i = 0; i < par.children.length; i++){
      par.children[i].style.color= textColor;
   }



const colSize = prompt('Enter color of div element');
let block = document.body.children[2];
block.style.color = colSize;

const colSize1 = prompt('Enter size of div element');
block.style.fontSize = colSize1;

const colSize2 = prompt('Enter thickness of div element');
block.style.fontStyle = colSize2;




const listTyp = prompt('Change list style type');
const lis = document.body.querySelector('ul');
lis.style.listStyleType = listTyp;



const repSite = prompt('Enter your net page');
let text = document.getElementById("href1");
text.replace("google", repSite);
