function calcular() {
    let dataEntrada = document.getElementById('data-entrada').value
    let dataSaida = document.getElementById('data-saida').value

    // let horaEntrada = document.getElementById('hora-entrada').value
    // let horaSaida = document.getElementById('hora-saida').value

    let tipoVaga = document.getElementById('tipo-vaga').value
    let totalDiarias = document.getElementById('total-diarias')
    let totalPagar = document.getElementById('total-pagar')

    if (dataEntrada == '' || dataSaida == '' || tipoVaga == '') {
        alert('Preencha todos os campos')
    } else {

        // Get 1 day in milliseconds
        var one_day = 1000 * 60 * 60 * 24

        // Convert both dates to milliseconds
        dataEntrada = new Date(dataEntrada)
        dataSaida = new Date(dataSaida)

        // Calculate the difference in milliseconds
        let diferenca = dataSaida.getTime() - dataEntrada.getTime()

        let totalDias = Math.round(diferenca / one_day) + 1

        if (totalDias < 0) {
            alert('A data de entrada deve ser antes da data de saída')
        } else {
            if (tipoVaga === 'coberta') {
                total = parseInt(totalDias) * 20
            } else {
                total = parseInt(totalDias) * 10
            }
            totalDiarias.innerText = 'Total de diárias: ' + totalDias
            totalPagar.innerText = 'Total a pagar: R$ ' + total
        }
    }
}