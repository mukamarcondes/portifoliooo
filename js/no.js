function exibeColunaArrumada(){
    curriculo.style.display = 'none';
    certificações.style.display = 'none';
    // contatos.style.display = 'none';
    colunaArrumada.style.display = 'flex';
    console.log("teste")
}
// // function exibeContatos(){
// //     colunaArrumada.style.display = 'none';
// //     certificações.style.display = 'none';
// //     curriculo.style.display = 'none';
// //     contatos.style.display = 'grid';
// }
function exibeCertificacoes(){
    colunaArrumada.style.display = 'none';
    // contatos.style.display = 'none';
    curriculo.style.display = 'none';
    certificações.style.display = 'grid';
}
function exibecurriculo(){
    colunaArrumada.style.display = 'none';
    // contatos.style.display = 'none';
    certificações.style.display = 'none';
    curriculo.style.display = 'flex';
}

// let $home = document.querySelector('#home');
let colunaArrumada = document.querySelector('.coluna-arrumada');
// home.addEventListener('click', exibeHome());

// // let $contatos = document.querySelector('#contatos');
// let contatos = document.querySelector('.contatos');
// // contatos.addEventListener('click', exibeContatos);

// let $certificações = document.querySelector('#certificações');
let certificações = document.querySelector('.certificações');
// certificações.addEventListener('click', exibeCertificacoes);

// let $sobreMim = document.querySelector('#sobreMim');
let curriculo = document.querySelector('.curriculo');
// sobreMim.addEventListener('click', exibeSobreMim);

// let el = document.getElementById('box');
// let elCoordenadas = el.getBoundingClientRect();

function menu() {
    var nav = document.getElementById("nav")
    nav.classList.toggle("active")
}
