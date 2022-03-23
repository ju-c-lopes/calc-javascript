const bts = document.querySelectorAll(".button");
const visor = document.querySelector('#visor__result-text');
const visorDisplay = document.querySelector("#visor__result");
const operations = ["+", "-", "*", "/", "=", ".", "C"];
let operacao = null;
let valor1 = null;
let valor2 = null;
let temp = null;
let novoCalc = true;

function zerarVariaveis() {
    operacao = null;
    valor1 = null;
    valor2 = null;
    temp = null;
}

for (let i = 0; i < bts.length; i++) {

    bts[i].addEventListener('click', () => {
        let selector = bts[i].innerText;

        const firstChar = visor.innerText.slice(0, visor.innerText.length - 1);
        const lastChar = visor.innerText.slice(visor.innerText.length - 1, visor.innerText.length);

        // variavel verify retorna se algum dos operadores matemáticos já foi clicado
        let verify = 
            visor.innerText.includes("+") ||
            visor.innerText.includes("-") ||
            visor.innerText.includes("*") ||
            visor.innerText.includes("/");
        
        // variável para verificar caractere para operador matemático no final
        const ultimoCharOperador = 
            lastChar == "-" || 
            lastChar == "*" || 
            lastChar == "+" || 
            lastChar == "/";

        // variável para identificar número negativo
        const negativo =  
            visor.innerText.slice(0, 1) == "-" &&
            !ultimoCharOperador && 
            visor.innerText.length >= 2;

        // Se clicado um botão que não seja número, faz as ações do if
        if (operations.includes(selector)) {

            // Caso precise digitar número negativo
            if (visor.innerText == "0" && !operacao && selector == "-") {
                visor.innerText = "-";
                return;
            }

            switch(selector) {

                /*
                    "Para operações matemáticas":

                    (Primeiro IF) Caso já tenha definido uma operação antes, não permitirá adicionar outra

                    Senão...

                        (IF) Verifica se é número negativo, se tiver operador no final não adicionará outro...
                        ...caso contrário adiciona operador

                        (ELSE IF) Se não houver algum caractere matemático no visor...
                        ... adiciona o operador matemático

                        (ELSE) senão... substitui o operador que já está no visor
                */ 

                case "+":
                    // Adiciona ou substitui + (operador soma) no visor apenas uma vez
                    if (lastChar == ".") return;
                    else {
                        if (negativo) {
                            if (ultimoCharOperador) {
                                return;
                            }
                            else visor.innerText += "+";
                        }
                        else if (!verify) {
                            visor.innerText += "+";
                        }
                        else {
                            if (ultimoCharOperador) {
                                visor.innerText = firstChar + "+";
                            }
                        }
                    }
                    break;

                case "-":
                    // Adiciona ou substitui - (operador subtração) no visor apenas uma vez
                    if (lastChar == ".") return;
                    else {
                        if (negativo) {
                            if (ultimoCharOperador) {
                                    return;
                            }
                            else visor.innerText += "-";
                        }
                        else if (!verify) {
                            visor.innerText += "-";
                        }
                        else {
                            if (ultimoCharOperador) {
                                visor.innerText = firstChar + "-";    
                            }
                        }
                    }
                    break;

                case "*":
                    // Adiciona ou substitui * (operador multiplicação) no visor apenas uma vez
                    if (lastChar == ".") return;
                    else {
                        if (negativo) {
                            if (ultimoCharOperador) {
                                    return;
                            }
                            else visor.innerText += "*";
                        }
                        else if (!verify) {
                            visor.innerText += "*";
                        }
                        else {
                            if (ultimoCharOperador) {
                                visor.innerText = firstChar + "*";    
                            }
                        }
                    }
                    break;

                case "/":
                    // Adiciona ou substitui / (operador divisão) no visor apenas uma vez
                    if (lastChar == ".") return;
                    else {
                        if (negativo) {
                            if (ultimoCharOperador) {
                                return;
                            }
                            else visor.innerText += "/";
                        }
                        else if (!verify) {
                            visor.innerText += "/";
                        }
                        else {
                            if (ultimoCharOperador) {
                                visor.innerText = firstChar + "/";   
                            }
                        }
                    }
                    break;

                case "=":
                    // caso tenha uma operação clicada, efetua a operação clicada e limpa as variáveis
                    if (operacao) {
                        if (!(visor.innerText == "Err" || visor.innerText == "ErrNaN")) {
                            valor2 = Number(visor.innerText);
                        } 
                        else {
                            visor.innerText = "Reinicie";
                            zerarVariaveis();
                        } 
                        switch(operacao) {
                            case "+":
                                visor.innerText = valor1 + valor2;
                                zerarVariaveis();
                                novoCalc = true;
                                break;
                            case "-":
                                visor.innerText = valor1 - valor2;
                                zerarVariaveis();
                                novoCalc = true;
                                break;
                            case "*":
                                visor.innerText = valor1 * valor2;
                                zerarVariaveis();
                                novoCalc = true;
                                break;
                            case "/":
                                visor.innerText = valor1 / valor2;
                                zerarVariaveis();
                                novoCalc = true;
                                break;
                            default:
                                return;
                        }
                    }
                    break;

                case ".":
                    // Adicionar ponto, prevenindo de ser adicionado duas vezes
                    if (visor.innerText.includes(".")) return;
                    else if (ultimoCharOperador) return;
                    else if (visor.innerText == "0" || visor.innerText == "0.") visor.innerText += ".";
                    else visor.innerText += ".";
                    novoCalc = false;
                    break;

                case "C":
                    // Limpa as variáveis e o visor
                    zerarVariaveis();
                    visor.innerText = 0;
                    break;
                default:
                    return;
            }
        }

        // se clicado botões de número efetua ações do else
        else {
            // caso ocorra algum destes erros
            if (visor.innerText == "Err" || visor.innerText == "ErrNaN" || visor.innerText == "Reinicie" || visor.innerText == "NaN" ) {
                zerarVariaveis();
                visor.innerText = selector;
            }

            // caso tenha selecionado algum operador matemático
            else if (verify) {
                if (ultimoCharOperador && visor.innerText.slice(0, 1) == "-" && visor.innerText.length > 1) {
                    if (!valor1) {
                        operacao = lastChar;
                        valor1 = temp ? "Err" : Number(firstChar);
                        visor.innerText = (valor1 != "Err") ? selector : valor1;
                    }
                }
                else if (visor.innerText.slice(0, 1) == "-") {
                    visor.innerText += selector;
                }

                else if (!valor1) {
                    operacao = lastChar;
                    valor1 = temp ? "Err" : Number(firstChar);
                    visor.innerText = (valor1 != "Err") ? selector : valor1;
                }

                else {
                    operacao = lastChar;
                    valor2 = temp ? "Err" : Number(firstChar);
                    visor.innerText = (valor2 != "Err") ? selector : valor2;
                }
            }

            // caso já haja um número, se zero, retira o zero e adiciona o número clicado
            else if (visor.innerText != "0" && !novoCalc) {
                // Caso seja número grande além do display, senão adiciona o número clicado
                if (visorDisplay.offsetWidth <= (visor.offsetWidth + (58 * 2))) {
                    let calc = Math.round(visorDisplay.offsetWidth / 29) - 4;
                    if (calc <= visor.innerText.length) {
                        temp = !temp ? visor.innerText : temp += selector;
                        visor.innerText = "..." + temp.slice(temp.length - calc, temp.length);
                    }
                }
                else {
                    visor.innerText += selector;
                }
            }

            // quando iniciado ou limpado com a tecla "C"
            else {
                visor.innerText = selector;
                novoCalc = false;
            }
        }
    });
}
