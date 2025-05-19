function calcularValor() {
    const valor15min = parseFloat(document.getElementById('valor15min').value);
    const tempo = parseInt(document.getElementById('tempo').value);

    if (isNaN(valor15min) || isNaN(tempo)) {
        alert("Preencha os campos corretamente!");
        return;
    }

    const blocos15min = Math.ceil(tempo / 15);
    const totalPagar = blocos15min * valor15min;

    document.getElementById('resultado').innerHTML = `
        Valor a pagar R$: ${totalPagar.toFixed(2).replace('.', ',')}
    `;
}