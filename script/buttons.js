const bts = document.querySelectorAll(".button");
const visor = document.querySelector('#visor__result');
const operations = ["+", "-", "*", "/", "=", ".", "C"];

for (let i = 0; i < bts.length; i++) {
    bts[i].addEventListener('click', () => {
        let selector = bts[i].innerText;

        if (operations.includes(selector)) {

            switch(selector) {
                case "+":
                    console.log('mais');
                    break;
                case "-":
                    break;
                case "*":
                    break;
                case "/":
                    break;
                case "=":
                    break;
                case ".":
                    break;
                case "C":
                    visor.innerText = 0;
                    break;
                default:
                    return;
            }
        }
        else {
            if (visor.innerText != 0) {
                visor.innerText += selector;
            }
            else {
                visor.innerText = selector;
            }
        }
    })
}

//() => {
//    window.addEventListener('click', () => { 
//    console.log(document.querySelector('.button--1').innerText);
//}