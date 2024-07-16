function StartPage(){
    const form = document.querySelector('form');
    const table = document.querySelector('#usersRegister tbody');
    const inputSearch = document.querySelector('#searchUser');
    const btnSearchUser = document.querySelector('#btnSearchUser');
    const btnClearSearch = document.querySelector('#btnClearSearch');

    const arrayUsers = getUsers();
    showAllUsers(table, arrayUsers);

    btnSearchUser.addEventListener('click', () => {
        const search = inputSearch.value;
        const filteredUsers = arrayUsers.filter(user => user.userNome.toLowerCase().includes(search.toLowerCase()));
        table.innerHTML = '';
        showAllUsers(table, filteredUsers);
    });

    btnClearSearch.addEventListener('click', () => {
        inputSearch.value = '';
        table.innerHTML = '';
        showAllUsers(table, arrayUsers);
    });

    form.addEventListener('submit', (e) => {
        
        e.preventDefault();
        
        if(arrayUsers.some(user => form.email.value == user.email)){
            e.preventDefault();
            alert('Email já cadastrado! Tente outro email.');
            return ;
        }else{
            arrayUsers.push(factoryUser(form.nome.value, form.dataNasc.value, form.tel.value, form.email.value));
            localStorage.setItem('users', JSON.stringify(arrayUsers));
            alert('Usuário cadastrado com sucesso!');
            location.reload();
        }
    });
}

function factoryUser(nome, dataNasc, tel, email){
    const user = {
        userNome: nome,
        userDataNasc: DateLocal(dataNasc),
        userTel: tel,
        userEmail: email,
    }
    return user;
}

function DateLocal(date){
    const [year, month, day] = date.split('-');
    const dateToConvert = new Date(year, month - 1, day);
    return dateToConvert.toLocaleDateString('pt-BR');
}

function showAllUsers(table, arrayUsers){
    if(arrayUsers.length === 0){
        const tr = document.createElement('tr');
        tr.innerHTML = `<td colspan="5" style="text-align:center">Nenhum usuário cadastrado</td>`;
        table.appendChild(tr);
        return ;
    }

    return arrayUsers.forEach(user => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td scope="row">${user.userNome}</td>
            <td>${user.userDataNasc}</td>
            <td>${user.userTel}</td>
            <td>${user.userEmail}</td>
        `;

        const button = document.createElement('button');
        button.textContent = 'Excluir';
        button.classList.add('delete');
        button.addEventListener('click', () => deleteUser(user.userEmail));
        
        tr.appendChild(button);
        table.appendChild(tr);
    })
}

function deleteUser(email){
    let userList = getUsers();

    userList = userList.filter(user => user.userEmail !== email);
    localStorage.setItem('users', JSON.stringify(userList));

    alert('Usuário excluído com sucesso!');
    location.reload();
}

function getUsers(){
    let users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

StartPage();