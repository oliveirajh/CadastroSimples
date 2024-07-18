export function DateLocal(date){
    const [year, month, day] = date.split('-');
    const dateToConvert = new Date(year, month - 1, day);
    return dateToConvert.toLocaleDateString('pt-BR');
}

export function ValidateBirthDate(date){
    const [day, month, year] = date.split('/');
    const dateToConvert = new Date(year, month - 1, day);
    const currentDate = new Date();
    
    const age = currentDate.getFullYear() - dateToConvert.getFullYear();
    return age >= 18;
}

export function maskPhone(e){
    let valor = e.target.value.replace(/\D/g, '');
    valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
    valor = valor.replace(/(\d)(\d{4})$/, '$1-$2');
    e.target.value = valor;
}