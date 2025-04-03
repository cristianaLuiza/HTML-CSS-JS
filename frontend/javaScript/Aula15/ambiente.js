let num = [5, 8, 9, 3]
num[3] = 10
num.push(2, 5) // para adicionar
num.length // para saber o tamanho da array


console.log(num);
console.log(`Meu vetor tem ${num.length} posições`)
console.log(`O primeiro valor do meu vetor é ${num[1]}`)
let pos = num.indexOf(6)
num.sort() // para embaralhar os valores do indice
console.log(`O valor 8 está na posição ${pos}`)
