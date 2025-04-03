let valores = [5, 8, 9, 3]
valores.sort()
for (let pos = 0; pos < valores.length; pos++) {
    console.log(` A posição ${pos} tem o valor ${valores[pos]}`)
}
console.log("*********************")
for(let pos in valores){ //leio para cada posição dentro de num
    console.log(`testando outra opção ${valores[pos]}`)
}

//num.indexOf(indice aqui) para buscar algum resultado, retorna a chave, o valor dentro do indice

