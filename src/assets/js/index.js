import Factory from './classes/factory.js';
import { maskPhone } from './utils/utils.js';
addEventListener('DOMContentLoaded', StartPage)

function StartPage(){
    const form = document.querySelector('form');
    const btnSearchUser = document.querySelector('#btnSearchUser');
    const btnClearSearch = document.querySelector('#btnClearSearch');
    const inputTelefone = document.getElementById('tel');
    const myFactory = new Factory();
    myFactory.showUser();
    
    // Máscara para telefone
    inputTelefone.addEventListener('input', e => maskPhone(e));

    // Filtrar usuário
    btnSearchUser.addEventListener('click', () => myFactory.filterUsers());

    //Limpar Filtros
    btnClearSearch.addEventListener('click', () => {
        myFactory.clearFilters();
    });

    form.addEventListener('submit', (e) => {
        let user = myFactory.criarUsuario(form.nome.value, form.dataNasc.value, form.tel.value, form.email.value);
        myFactory.addUser(e, user) ? form.reset() : '';
    });
}

