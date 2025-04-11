
function showError(id, message) {
    const errorSpan = document.getElementById(`erro-${id}`);
    if (errorSpan) errorSpan.textContent = message;
}

function clearErrors() {
    const spans = document.querySelectorAll('span[id^="erro-"]');
    spans.forEach(span => span.textContent = '');
}

function validarNome(nome) {
    if (!nome || nome.trim().length < 5 || nome.trim().split(' ').length < 2) {
        showError('nome', 'Nome deve conter pelo menos 2 palavras e 5 caracteres.');
        return false;
    }
    return true;
}

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
        showError('cpf', 'CPF inválido.');
        return false;
    }

    let soma = 0;
    for (let i = 0; i < 9; i++) soma += parseInt(cpf.charAt(i)) * (10 - i);
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(9))) {
        showError('cpf', 'CPF inválido.');
        return false;
    }

    soma = 0;
    for (let i = 0; i < 10; i++) soma += parseInt(cpf.charAt(i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.charAt(10))) {
        showError('cpf', 'CPF inválido.');
        return false;
    }

    return true;
}

function validarRG(rg) {
    if (!rg || !/^(\d{2}\.?\d{3}\.?\d{3}-?\d{1})$/.test(rg)) {
        showError('rg', 'RG inválido. Ex: 12.345.678-9');
        return false;
    }
    return true;
}

function validarDataNascimento(dataStr) {
    const nascimento = new Date(dataStr);
    const hoje = new Date();

    if (isNaN(nascimento.getTime())) {
        showError('dataNascimento', 'Data de nascimento inválida.');
        return false;
    }

    const idade = hoje.getFullYear() - nascimento.getFullYear();
    const ajustaIdade = hoje.getMonth() < nascimento.getMonth() ||
        (hoje.getMonth() === nascimento.getMonth() && hoje.getDate() < nascimento.getDate()) ? idade - 1 : idade;

    if (ajustaIdade < 18) {
        showError('dataNascimento', 'É necessário ter ao menos 18 anos.');
        return false;
    }

    return true;
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        showError('email', 'E-mail inválido.');
        return false;
    }
    return true;
}

function validarTelefone(telefone) {
    const regex = /^\(?\d{2}\)?\s?\d{5}-?\d{4}$/;
    if (!regex.test(telefone)) {
        showError('telefone', 'Telefone inválido. Ex: (11) 91234-5678');
        return false;
    }
    return true;
}

function validarCargo(cargo) {
    if (!cargo || cargo.trim() === '') {
        showError('cargo', 'Selecione um cargo.');
        return false;
    }
    return true;
}

function validarSalario(salarioStr) {
    const salario = parseFloat(salarioStr.replace(',', '.'));
    if (isNaN(salario) || salario < 1412.00) {
        showError('salario', 'Salário inválido ou abaixo do mínimo de R$ 1412.00.');
        return false;
    }
    return true;
}

function validarDataAdmissao(dataAdmissaoStr, dataNascimentoStr) {
    const admissao = new Date(dataAdmissaoStr);
    const nascimento = new Date(dataNascimentoStr);
    const hoje = new Date();

    if (isNaN(admissao.getTime())) {
        showError('dataAdmissao', 'Data de admissão inválida.');
        return false;
    }

    if (admissao > hoje) {
        showError('dataAdmissao', 'A admissão não pode ser futura.');
        return false;
    }

    if (admissao <= nascimento) {
        showError('dataAdmissao', 'Admissão deve ser após nascimento.');
        return false;
    }

    return true;
}

function validarEndereco(endereco) {
    if (!endereco || endereco.trim().length < 10) {
        showError('endereco', 'Endereço deve ter pelo menos 10 caracteres.');
        return false;
    }
    return true;
}

function validarCEP(cep) {
    const regex = /^\d{5}-\d{3}$/;
    if (!cep || !regex.test(cep)) {
        showError('cep', 'CEP inválido. Use o formato 00000-000.');
        return false;
    }
    return true;
}

function validarDependentes(depStr) {
    const dependentes = parseInt(depStr);
    if (isNaN(dependentes) || dependentes < 0 || dependentes > 8) {
        showError('dependentes', 'Número de dependentes inválido (0 a 8).');
        return false;
    }
    return true;
}

export default function validateForm() {
    clearErrors();

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const rg = document.getElementById('rg').value;
    const dataNascimento = document.getElementById('dataNascimento').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const cargo = document.getElementById('cargo').value;
    const salario = document.getElementById('salario').value;
    const dataAdmissao = document.getElementById('dataAdmissao').value;
    const endereco = document.getElementById('endereco').value;
    const cep = document.getElementById('cep').value;
    const dependentes = document.getElementById('dependentes').value;

    return (
        validarNome(nome) &&
        validarCPF(cpf) &&
        validarRG(rg) &&
        validarDataNascimento(dataNascimento) &&
        validarEmail(email) &&
        validarTelefone(telefone) &&
        validarCargo(cargo) &&
        validarSalario(salario) &&
        validarDataAdmissao(dataAdmissao, dataNascimento) &&
        validarEndereco(endereco) &&
        validarCEP(cep) &&
        validarDependentes(dependentes)
    );
}