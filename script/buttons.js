import soma from "./soma.js";

const bts = document.querySelectorAll(".button");
const visor = document.querySelector('#visor__result');
const operations = ["+", "-", "*", "/", "=", ".", "C"];
let operacao = null;
let valor1 = null;
let valor2 = null;

for (let i = 0; i < bts.length; i++) {
    bts[i].addEventListener('click', () => {
        let selector = bts[i].innerText;
        // variavel verify retorna se algum dos operadores matemáticos já foi clicado
        let verify = 
            visor.innerText.includes("+") ||
            visor.innerText.includes("-") ||
            visor.innerText.includes("*") ||
            visor.innerText.includes("/");
        if (operations.includes(selector)) {

            switch(selector) {
                case "+":
                    if (!verify) {
                        visor.innerText += "+";
                    }
                    else {
                        visor.innerText = visor.innerText.slice(0, visor.innerText.length - 1) + "+"
                    }
                    break;
                case "-":
                    if (!verify) {
                        visor.innerText += "-";
                    }
                    else {
                        visor.innerText = visor.innerText.slice(0, visor.innerText.length - 1) + "-"
                    }
                    break;
                case "*":
                    if (!verify) {
                        visor.innerText += "*";
                    }
                    else {
                        visor.innerText = visor.innerText.slice(0, visor.innerText.length - 1) + "*"
                    }
                    break;
                case "/":
                    if (!verify) {
                        visor.innerText += "/";
                    }
                    else {
                        visor.innerText = visor.innerText.slice(0, visor.innerText.length - 1) + "/"
                    }
                    break;
                case "=":
                    if (!valor1) return;
                    else {
                        valor2 = visor.innerText;
                        switch(operacao) {
                            case "+":
                                break;
                            case "-":
                                break;
                            case "*":
                                break;
                            case "/":
                                break;
                            default:
                                return;
                        }
                    }
                    break;
                case ".":
                    break;
                case "C":
                    // Limpa o visor
                    visor.innerText = 0;
                    break;
                default:
                    return;
            }
        }
        else {
            if (verify) {
                
                if (!valor1) {
                    operacao = visor.innerText.slice(visor.innerText.length - 1, visor.innerText.length);
                    valor1 = visor.innerText.slice(0, visor.innerText.length - 1)
                    visor.innerText = selector;
                }
            }
            else if (visor.innerText != 0) {
                visor.innerText += selector;
            }
            else {
                visor.innerText = selector;
            }
        }
    })
}

export default { visor };