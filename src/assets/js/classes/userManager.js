import {ValidateBirthDate } from '../utils/utils.js';
class UserManager {
    
    constructor(){
        this.arrayUsers = this.getUsers();
        this.table = document.querySelector('#usersRegister tbody');
        this.inputSearch = document.querySelector('#searchUser');
    }
    
    //Metodo para adicionar usuários ao LocalStorage
    addUser(e, userCreate){
        //Verifica se o e-mail e/ou telefone já estão cadastrados
        if(this.arrayUsers.some(user => String(userCreate.userEmail) == String(user.userEmail).toLowerCase() || String(userCreate.userTel) == String(user.userTel))){
            e.preventDefault();
            alert('E-mail e/ou Telefone já cadastrado! Tente outro e-mail e/ou telefone.');
            return false;
        }
        //Valida se o usuário é maior de 18 anos
        if(!ValidateBirthDate(userCreate.userDataNasc)){
            e.preventDefault();
            alert('Usuário menor de 18 anos! Cadastro não permitido.');
            return false;
        }
        this.arrayUsers.push(userCreate);
        localStorage.setItem('users', JSON.stringify(this.arrayUsers));
        this.showUser();
        alert('Usuário cadastrado com sucesso!');
        e.preventDefault();
        return true;
    }

    //Metodo para excluir usuários
    deleteUser(email){
        let userList = this.arrayUsers;
        //Verifica se o usuário realmente deseja excluir o usuário
        if(confirm('Deseja realmente excluir este usuário?')){
            userList = userList.filter(user => user.userEmail !== email);
            localStorage.setItem('users', JSON.stringify(userList));
        
            alert('Usuário excluído com sucesso!');
            location.reload();
        }else{
            alert('Operação cancelada!');
            location.reload();
        }
    }

    showUser(filteredUsers = ''){
        //Verifica se há usuários cadastrados e exibe na tabela, caso contrário exibe mensagem de nenhum usuário cadastrado
        const arrayUsers = filteredUsers.length ||Array.isArray(filteredUsers) ? filteredUsers : this.arrayUsers
        this.table.innerHTML = arrayUsers.length ? '' : `<tr><td colspan="5" style="text-align:center">Nenhum usuário cadastrado</td></tr>`;

        return arrayUsers.map(user => {
            const tr = document.createElement('tr');
            const td = document.createElement('td');
            const btnDelete = document.createElement('button');

            btnDelete.textContent = 'Excluir';
            btnDelete.classList.add('delete');
            btnDelete.addEventListener('click', () => this.deleteUser(user.userEmail));
            td.appendChild(btnDelete);


            tr.innerHTML = `
                <td scope="row">${user.userNome}</td>
                <td>${user.userDataNasc}</td>
                <td>${user.userTel}</td>
                <td>${user.userEmail}</td>
            `;
            tr.appendChild(td);

            this.table.appendChild(tr);
        })
    }

    //Metodo para filtrar usuários pelo nome
    filterUsers(){
        const search = this.inputSearch.value;
        const filteredUsers = this.arrayUsers.filter(user => user.userNome.toLowerCase().includes(search.toLowerCase()));
        this.showUser(filteredUsers);
    }

    clearFilters(){
        this.inputSearch.value = '';
        this.showUser();
    }

    getUsers(){
        let users = localStorage.getItem('users');
        return users ? JSON.parse(users) : [];
    }

}

export default UserManager;