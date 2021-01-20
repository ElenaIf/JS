let number = Math.round(Math.random() * 100);
let stringNumber = String(number);
let firstDigit = Number(stringNumber.slice(0, 1));
let secondDigit = Number(stringNumber.slice(1, 2));
let numberFirstPart;
let numberLastPart;;

const zero = "nolla";
const one = "yksi";
const two = "kaksi";
const three = "kolme";
const four = "neljä";
const five = "viisi";
const six = "kuusi";
const seven = "seitsemän";
const eight = "kahdeksan";
const nine = "yhdeksän";
const ten = "kymmenen";
const hundred = "sata"
const tens = "kymmentä";
const toista = "toista"


if (number <= 10 || number === 100) {
    switch (number) {
        case 0:
            console.log(number + " - " + zero);
            break;
        case 1:
            console.log(number + " - " + one);
            break;
        case 2:
            console.log(number + " - " + two);
            break;
        case 3:
            console.log(number + " - " + three);
            break;
        case 4:
            console.log(number + " - " + four);
            break;
        case 5:
            console.log(number + " - " + five);
            break;
        case 6:
            console.log(number + " - " + six);
            break;
        case 7:
            console.log(number + " - " + seven);
            break;
        case 8:
            console.log(number + " - " + eight);
            break;
        case 9:
            console.log(number + " - " + nine);
            break;
        case 10:
            console.log(number + " - " + ten);
            break;
        case 100:
            console.log(number + " - " + hundred);  
            break;
        default:
            console.log("Error");
            break;
    }
} else if (((number % 10) === 0) && number !== 10 && number !== 100) {
    switch (number) {
        case 20:
            console.log(number + " - " + two + tens);
            break;
        case 30:
            console.log(number + " - " + three + tens);
            break;
        case 40:
            console.log(number + " - " + four + tens);
                break;
        case 50:
            console.log(number + " - " + five + tens);
            break;
        case 60:
            console.log(number + " - " + six + tens);
            break;
        case 70:
            console.log(number + " - " + seven + tens);
            break;
        case 80:
            console.log(number + " - " + eight + tens);
            break;
        case 90:
            console.log(number + " - " + nine + tens);
            break;
        default:
            console.log("Error");
            break;
    }
} else if (number > 20) {

   switch (firstDigit) {
       case 2:
           numberFirstPart = two;
           break;
        case 3:
            numberFirstPart = three;
            break;
        case 4:
            numberFirstPart = four;
            break;
        case 5:
            numberFirstPart = five;
            break;
        case 6:
            numberFirstPart = six;
            break;
        case 7:
            numberFirstPart = seven;
            break;
        case 8:
            numberFirstPart = eight;
            break;
        case 9:
            numberFirstPart = nine;
            break;
        default:
            console.log("Error");
            break;
   }

   switch (secondDigit) {
    case 1:
        numberLastPart = one;
        break;
    case 2:
        numberLastPart = two;
        break;
     case 3:
         numberLastPart = three;
         break;
     case 4:
         numberLastPart = four;
         break;
     case 5:
         numberLastPart = five;
         break;
     case 6:
         numberLastPart = six;
         break;
     case 7:
         numberLastPart = seven;
         break;
     case 8:
         numberLastPart = eight;
         break;
     case 9:
         numberLastPart = nine;
         break;
     default:
         console.log("Error");
         break;
}

console.log(number + " - " + numberFirstPart + tens + numberLastPart);
   
} else if (number > 10 && number < 20) {

    switch (secondDigit) {
        case 1:
            numberFirstPart = one;
            break;
        case 2:
            numberFirstPart = two;
            break;
         case 3:
             numberFirstPart = three;
             break;
         case 4:
             numberFirstPart = four;
             break;
         case 5:
             numberFirstPart = five;
             break;
         case 6:
             numberFirstPart = six;
             break;
         case 7:
             numberFirstPart = seven;
             break;
         case 8:
             numberFirstPart = eight;
             break;
         case 9:
             numberFirstPart = nine;
             break;
         default:
             console.log("Error");
             break;
    }

    console.log(number + " - " + numberFirstPart + toista);

}

