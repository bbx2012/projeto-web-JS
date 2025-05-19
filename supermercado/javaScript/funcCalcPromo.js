function mostrarPromocao() {
    const produto = document.getElementById('produto').value;
    const preco = parseFloat(document.getElementById('preco').value);

    if (!produto || isNaN(preco)) {
        alert("Preencha todos os campos corretamente!");
        return;
    }

    const totalPromocao = (preco * 2) + (preco * 0.5);

    document.getElementById('resultado').innerHTML = `
        <h3>Promoção:</h3>
        <p>Leve 3 unidades de ${produto} por R$${totalPromocao.toFixed(2).replace('.', ',')}</p>
        <p>(Ou pague 2 e leve 3!)</p>
    `;
}