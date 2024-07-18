import Factory from './factory.js';
addEventListener('DOMContentLoaded', StartPage)

function StartPage(){
    const form = document.querySelector('form');
    const btnSearchUser = document.querySelector('#btnSearchUser');
    const btnClearSearch = document.querySelector('#btnClearSearch');
    const inputTelefone = document.getElementById('tel');
    const myFactory = new Factory();
    myFactory.showUser();
    

    inputTelefone.addEventListener('input', e => maskPhone(e));

    // Filtrar usuário
    btnSearchUser.addEventListener('click', (e) => {
        myFactory.filterUsers(e);
    });

    //Limpar Filtros
    btnClearSearch.addEventListener('click', () => {
        myFactory.clearFilters();
    });

    form.addEventListener('submit', (e) => {
        let user = myFactory.criarUsuario(form.nome.value, form.dataNasc.value, form.tel.value, form.email.value);
        myFactory.addUser(e, user) ? form.reset() : '';
    });
}

function maskPhone(e){
    let valor = e.target.value.replace(/\D/g, '');
    valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
    valor = valor.replace(/(\d)(\d{4})$/, '$1-$2');
    e.target.value = valor;
}