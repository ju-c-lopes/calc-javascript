import soma from "./soma.js";
import subtracao from "./sub.js";
import multiplicacao from "./mult.js";
import divisao from "./div.js";

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
                    console.log(valor1, valor2)
                    if (!valor1) return;
                    else {
                        valor2 = visor.innerText;
                        console.log(valor1, valor2, operacao)
                        switch(operacao) {
                            case "+":
                                visor.innerText = soma(valor1, valor2);
                                break;
                            case "-":
                                visor.innerText = subtracao(valor1, valor2);
                                break;
                            case "*":
                                visor.innerText = multiplicacao(valor1, valor2);
                                break;
                            case "/":
                                visor.innerText = divisao(valor1, valor2);
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