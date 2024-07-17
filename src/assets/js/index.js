addEventListener('DOMContentLoaded', StartPage)

function StartPage(){
    const form = document.querySelector('form');
    const table = document.querySelector('#usersRegister tbody');
    const inputSearch = document.querySelector('#searchUser');
    const btnSearchUser = document.querySelector('#btnSearchUser');
    const btnClearSearch = document.querySelector('#btnClearSearch');
    const inputTelefone = document.getElementById('tel');
    
    const arrayUsers = getUsers();
    showUsers(table, arrayUsers);
    
    
    inputTelefone.addEventListener('input', e => maskPhone(e));
    
    // Filtrar usuário
    btnSearchUser.addEventListener('click', () => {
        const search = inputSearch.value;
        const filteredUsers = arrayUsers.filter(user => user.userNome.toLowerCase().includes(search.toLowerCase()));
        showUsers(table, filteredUsers);
    });

    //Limpar Filtros
    btnClearSearch.addEventListener('click', () => {
        inputSearch.value = '';
        showUsers(table, arrayUsers);
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        addUser(form, arrayUsers);
    });
}

//Formatar telefone
function maskPhone(e){
    let valor = e.target.value.replace(/\D/g, '');
    valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
    valor = valor.replace(/(\d)(\d{4})$/, '$1-$2');
    e.target.value = valor;
}

//Factory User
function factoryUser(nome, dataNasc, tel, email){
    const user = {
        userNome: nome,
        userDataNasc: DateLocal(dataNasc),
        userTel: tel,
        userEmail: String(email).toLowerCase(),
    }
    return user;
}

//Adicionar usuário
function addUser(form, arrayUsers){
    if(arrayUsers.some(user => String(form.email.value).toLowerCase() == String(user.userEmail).toLowerCase())){
        alert('Email já cadastrado! Tente outro email.');
        return ;
    }
    
    arrayUsers.push(factoryUser(form.nome.value, form.dataNasc.value, form.tel.value, form.email.value));
    localStorage.setItem('users', JSON.stringify(arrayUsers));
    alert('Usuário cadastrado com sucesso!');
    location.reload();
}

//Converter data para formato local
function DateLocal(date){
    const [year, month, day] = date.split('-');
    const dateToConvert = new Date(year, month - 1, day);
    return dateToConvert.toLocaleDateString('pt-BR');
}

//Mostrar usuários
function showUsers(table, arrayUsers){
    table.innerHTML = arrayUsers.length ? '' : `<tr><td colspan="5" style="text-align:center">Nenhum usuário cadastrado</td></tr>`;

    return arrayUsers.map(user => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td scope="row">${user.userNome}</td>
            <td>${user.userDataNasc}</td>
            <td>${user.userTel}</td>
            <td>${user.userEmail}</td>
            <td><button class="delete" onclick="deleteUser('${user.userEmail}')">Excluir</button></td>
        `;
        table.appendChild(tr);
    })
}

//Excluir usuário
function deleteUser(email){
    let userList = getUsers();

    userList = userList.filter(user => user.userEmail !== email);
    localStorage.setItem('users', JSON.stringify(userList));

    alert('Usuário excluído com sucesso!');
    location.reload();
}

//Obter usuários
function getUsers(){
    let users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}