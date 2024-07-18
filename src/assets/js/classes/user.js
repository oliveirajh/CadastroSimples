import { DateLocal } from '../utils/utils.js';

export default class User{
    constructor(nome, dataNasc, tel, email){
        this.userNome = nome;
        this.userDataNasc = DateLocal(dataNasc);
        this.userTel = String(tel).split(' ').join('');
        this.userEmail = String(email).toLowerCase().split(' ').join('');
    }
}