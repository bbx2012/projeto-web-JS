function calcularPromocao() {
    const medicamento = document.getElementById('medicamento').value;
    const preco = parseFloat(document.getElementById('preco').value);

    if (!medicamento || isNaN(preco)) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    const total = preco * 2;
    const desconto = total % 1; // Pega os centavos
    const valorPromocao = total - desconto;

    document.getElementById('resultado').innerHTML = `
        Promoção: Leve 2 por R$${valorPromocao.toFixed(2).replace('.', ',')}
    `;
}