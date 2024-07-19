import User from './user.js';

export default class UserFactory{
    static criarUsuario(nome, dataNasc, tel, email){
        return new User(nome, dataNasc, tel, email);
    }
}