import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada');
const qntdCaracteres = document.querySelector('.qntd-caracteres');
const chkNumeros = document.querySelector('.chk-numeros');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');

export default () => {
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera();
    });
};

function gera() {
    const senha = geraSenha(
        qntdCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    );

    return senha || 'Nada selecionado' ;
}
