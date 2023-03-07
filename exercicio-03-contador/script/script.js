
function cont_with_step(){
    var first = document.getElementById("first")
    var last = document.getElementById("last")
    var step = document.getElementById("step")

    if (first.value == '' || last.value == '' || step.value == '' ){
        window.alert(`Erro: Preencha todos os campos!!!`)
    }
    else if (Number(step.value) == 0 ){
        window.alert(`Erro: Valor do passo deve ser maior que zero!!!`)
    }
    else if(Number(first.value) > Number(last.value)){
        window.alert(`Erro: O valor do primeiro número é maior que o último numero!!!`)
    }
    else if ((Number(last.value) - Number(first.value)) < Number(step.value)){
        window.alert(`Erro: Passo muito grande!!!`)
    }
    else{
        var contador = document.getElementById("contador")
        var espace = Number(first.value)

        contador.innerHTML = `Contando: <br>`

        if(((Number(first.value) - Number(last.value))%Number(step.value)) != 0 ){
            while (espace < Number(last.value)){
                                
                contador.innerHTML += `${espace} - `
                espace += Number(step.value)
            }
            contador.innerHTML += `Fim`
        }
        else{
            while (espace < Number(last.value)){
                                
                contador.innerHTML += `${espace} - `
                espace += Number(step.value)
            }
            contador.innerHTML += `${Number(last.value)}`
        }

    }
    
}