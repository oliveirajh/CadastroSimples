function StartPage(){
    const form = document.querySelector('form');
    const table = document.querySelector('#usersRegister tbody');

    const arrayUsers = getUsers();
    showAllUsers(table, arrayUsers);

    form.addEventListener('submit', (e) => {
        const data = Object.fromEntries(new FormData(e.target).entries());
        arrayUsers.push(data);
        if(arrayUsers.some(user => data.email == user.email)){
            e.preventDefault();
            alert('Email já cadastrado! Tente outro email.');
            return ;
        }else{
            localStorage.setItem('users', JSON.stringify(arrayUsers));
            alert('Usuário cadastrado com sucesso!');
        }
    });
}

function showAllUsers(table, arrayUsers){
    return arrayUsers.forEach((user, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.nome}</td>
            <td>${user.dataNasc}</td>
            <td>${user.tel}</td>
            <td>${user.email}</td>
        `;
        // Create a button element
        const button = document.createElement('button');
        button.textContent = 'Excluir';
        // Add an event listener instead of setting onclick attribute
        button.addEventListener('click', () => deleteUser(user.email));
        tr.appendChild(button);
        table.appendChild(tr);
    })
}

function deleteUser(email){
    let userList = getUsers();

    userList = userList.filter(user => user.email !== email);
    localStorage.setItem('users', JSON.stringify(userList));

    alert('Usuário excluído com sucesso!');
    location.reload();
}

function getUsers(){
    let users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

StartPage();