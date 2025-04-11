import validateForm from "./ValidateForm.js";

let employees = [];


document.getElementById('employeeForm').addEventListener('submit', function (e) {
    e.preventDefault();

    if (!validateForm()) return;

    const employee = {
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        rg: document.getElementById('rg').value,
        dataNascimento: document.getElementById('dataNascimento').value,
        email: document.getElementById('email').value,
        telefone: document.getElementById('telefone').value,
        cargo: document.getElementById('cargo').value,
        salario: document.getElementById('salario').value,
        dataAdmissao: document.getElementById('dataAdmissao').value,
        endereco: document.getElementById('endereco').value,
        cep: document.getElementById('cep').value,
        dependentes: document.getElementById('dependentes').value
    };

    employees.push(employee);
    displayEmployees();
    this.reset();
});

function displayEmployees() {
    const listDiv = document.getElementById('employeeList');
    listDiv.innerHTML = '<h2>Funcionários Cadastrados</h2>';

    if (employees.length === 0) {
        listDiv.innerHTML += '<p>Nenhum funcionário cadastrado ainda.</p>';
        return;
    }

    employees.forEach((emp, index) => {
        listDiv.innerHTML += `
            <div class="employee-card">
                <h3>${emp.nome} - ${emp.cargo}</h3>
                <p><strong>CPF:</strong> ${emp.cpf}</p>
                <p><strong>E-mail:</strong> ${emp.email}</p>
                <p><strong>Admissão:</strong> ${emp.dataAdmissao}</p>
                <p><strong>Salário:</strong> R$ ${emp.salario}</p>
                <button onclick="deleteEmployee(${index})">Remover</button>
                <hr>
            </div>
        `;
    });
}

function deleteEmployee(index) {
    employees.splice(index, 1);
    displayEmployees();
}