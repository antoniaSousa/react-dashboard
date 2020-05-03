import {URL_API} from "./base";
export function consultarFaturamento(){
    return fetch (`${URL_API}/faturamento`).then(resultado=> resultado.json()); //retorna um promise, permite tratar um dado
}
//é usado o template streams do javascrip que permite adicionar variaveis dentro da string desde que esteja delimitada com acento grave `