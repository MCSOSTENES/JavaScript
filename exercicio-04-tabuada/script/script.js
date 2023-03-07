
function createTab(){
    var select = document.getElementById('tab')
    var number = document.getElementById('number')
    
    select.innerHTML = ''
    select.setAttribute('style','display:block;')
    
    if(Number(number.value) == 0 || number == ''){
        window.alert('Erro : Digite um número valido!!!')
    }
    else{
        let n = Number(number.value)
        for(let i = 1; i<=10 ; i++){
            //window.alert(`${prod}`)
            var produt = document.createElement('option')
            produt.text = `${n} X ${i} = ${n*i}`
            produt.value = `select${i}`
            select.appendChild(produt)
        }
    }
}