TestFramework.test("should ", function() {
    
    TestFramework.assertEquals();
});

TestFramework.test("Deve validar nome completo não vazio", function() {
    const nome = "Ana Layza";
    TestFramework.assertTrue(nome.trim().length > 0, "Nome não pode estar vazio");
});

TestFramework.test("Deve falhar se o nome for vazio", function() {
    const nome = "";
    TestFramework.assertFalse(nome.trim().length > 0, "Nome vazio aceito incorretamente");
});

TestFramework.test("Deve validar CPF válido (formato XXX.XXX.XXX-XX)", function() {
    const cpf = "123.456.789-00";
    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    TestFramework.assertTrue(regex.test(cpf), "CPF em formato inválido");
});

TestFramework.test("Deve validar RG válido (formato XX.XXX.XXX-X)", function() {
    const rg = "12.345.678-9";
    const regex = /^\d{2}\.\d{3}\.\d{3}-\d{1}$/;
    TestFramework.assertTrue(regex.test(rg), "RG inválido");
});

TestFramework.test("Deve validar e-mail válido", function() {
    const email = "ana@empresa.com";
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    TestFramework.assertTrue(regex.test(email), "E-mail inválido");
});

TestFramework.test("Deve validar telefone válido", function() {
    const telefone = "(83) 91234-5678";
    const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
    TestFramework.assertTrue(regex.test(telefone), "Telefone inválido");
});

TestFramework.test("Salário deve ser maior que zero", function () {
    const salario = 1500;
    TestFramework.assertGreaterThan(salario, 0);
});

TestFramework.test("Data de admissão deve ser maior que data de nascimento", function () {
    const nascimento = new Date("2000-01-01");
    const admissao = new Date("2020-01-01");
    TestFramework.assertGreaterThan(admissao.getTime(), nascimento.getTime());
});

TestFramework.test("Cargo selecionado deve estar entre os válidos", function () {
    const cargo = "analista";
    const cargosValidos = ["gerente", "analista", "assistente", "estagiario"];
    TestFramework.assertInArray(cargo, cargosValidos);
});


TestFramework.test("Deve validar CEP no formato correto", function() {
    const cep = "58000-000";
    const regex = /^\d{5}-\d{3}$/;
    TestFramework.assertTrue(regex.test(cep), "CEP inválido");
});

TestFramework.test("Deve validar número de dependentes como número não negativo", function() {
    const dependentes = 2;
    TestFramework.assertGreaterThanOrEqual(dependentes, 0, "Número de dependentes inválido");
});

TestFramework.test("Salário igual a zero deve ser inválido", function() {
    const salario = 0;
    TestFramework.assertFalse(salario > 0, "Salário zero foi aceito como válido");
});

window.addEventListener('load', function() {
    TestFramework.runTests();
});