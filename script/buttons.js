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
                /*
                    "Para operações matemáticas":
                    Caso já tenha definido uma operação antes, não permitirá adicionar outra
                    Senão...
                        Se não houver algum caractere matemático no visor...
                        ... adiciona o operador matemático
                        senão... substitui o operador que já está no visor
                */ 
                case "+":
                    if (operacao) return;
                    else {
                        if (!verify) {
                            visor.innerText += "+";
                        }
                        else {
                            visor.innerText = visor.innerText.slice(0, visor.innerText.length - 1) + "+"
                        }
                    }
                    break;
                case "-":
                    if (operacao) return;
                    else {
                        if (!verify) {
                            visor.innerText += "-";
                        }
                        else {
                            visor.innerText = visor.innerText.slice(0, visor.innerText.length - 1) + "-"
                        }
                    }
                    break;
                case "*":
                    if (operacao) return;
                    else {
                        if (!verify) {
                            visor.innerText += "*";
                        }
                        else {
                            visor.innerText = visor.innerText.slice(0, visor.innerText.length - 1) + "*"
                        }
                    }
                    break;
                case "/":
                    if (operacao) return;
                    else {
                        if (!verify) {
                            visor.innerText += "/";
                        }
                        else {
                            visor.innerText = visor.innerText.slice(0, visor.innerText.length - 1) + "/"
                        }
                    }
                    break;
                case "=":
                    // caso tenha uma operação clicada, efetua a operação clicada e limpa as variáveis
                    if (operacao) {
                        valor2 = Number(visor.innerText);
                        switch(operacao) {
                            case "+":
                                visor.innerText = valor1 + valor2;
                                valor1 = null;
                                valor2 = null;
                                operacao = null;
                                break;
                            case "-":
                                visor.innerText = valor1 - valor2;
                                valor1 = null;
                                valor2 = null;
                                operacao = null;
                                break;
                            case "*":
                                visor.innerText = valor1 * valor2;
                                valor1 = null;
                                valor2 = null;
                                operacao = null;
                                break;
                            case "/":
                                visor.innerText = valor1 / valor2;
                                valor1 = null;
                                valor2 = null;
                                operacao = null;
                                break;
                            default:
                                return;
                        }
                    }
                    break;
                case ".":
                    break;
                case "C":
                    // Limpa as variáveis e o visor
                    valor1 = null;
                    valor2 = null;
                    operacao = null;
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
                    valor1 = Number(visor.innerText.slice(0, visor.innerText.length - 1));
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
