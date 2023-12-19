function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.getElementById('res')
   if (fano.value.length == 0 || fano.value > ano) {
    alert ('Verifique os dados e tente novamente!')
   } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    if (fsex[0].checked) {
        genero = 'Masculino'
    } else if (fsex[1].checked) {
        genero = 'Feminino'
    } 
    res.innerHTML = `A sua idade é ${idade} anos e seu sexo é ${genero}`
   }
}