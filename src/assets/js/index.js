import UserFactory from './classes/userFactory.js';
import UserManager from './classes/userManager.js';
import { maskPhone } from './utils/utils.js';
addEventListener('DOMContentLoaded', StartPage)

function StartPage(){
    const form = document.querySelector('form');
    const btnSearchUser = document.querySelector('#btnSearchUser');
    const btnClearSearch = document.querySelector('#btnClearSearch');
    const inputTelefone = document.getElementById('tel');
    
    const uManager = new UserManager();
    uManager.showUser();
    
    // Máscara para telefone
    inputTelefone.addEventListener('input', e => maskPhone(e));

    // Filtrar usuário
    btnSearchUser.addEventListener('click', () => uManager.filterUsers());

    //Limpar Filtros
    btnClearSearch.addEventListener('click', () => uManager.clearFilters());

    form.addEventListener('submit', (e) => {
        let user = UserFactory.criarUsuario(form.nome.value, form.dataNasc.value, form.tel.value, form.email.value);
        uManager.addUser(e, user) ? form.reset() : '';
    });
}

