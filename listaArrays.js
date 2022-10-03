// 1. Crie um array de 5 nomes;

let nomes = ['Pablo', 'Charles', 'Antony', 'Anderson', 'Gabriel']
console.log(nomes)

// 2. Crie um array com 8 salários de funcionários;

let salariosFuncionarios = [1500, 5500, 3600, 2400, 8200, 1200, 10000, 7700]
console.log(salariosFuncionarios)

// 3. Crie um array de valores booleanos (true ou false);

let boolean = [2 > 3, 3 > 5, 5 >= 5, 4 <= 10, 10 != 10]
console.log(boolean)

// 4. Crie um array de salários;

let salarios = [3300, 2200, 4200, 6900, 5100]
console.log(salarios)


// 5. Crie um array que em cada linha possua valor de um produto e ao lado possua o valor do produto com desconto de 5%;

const produtos = [100, 200, 250, 75, 300]
let desconto = []
let newValue = 0
var resultado = []

for (let i = 0; i < produtos.length; i++) {
    newValue = produtos[i] - (produtos[i] * 0.05);
    desconto.push(newValue)
}

for (let i = 0; i < produtos.length; i++) {
    resultado.push(produtos[i], desconto[i])
}

console.log(resultado)

// 6. Crie uma Matriz de ordem 3 e insira números aleatórios de 0 a 9. Em seguida multiplique por 2 os valores da diagonal principal;

var one, two, three, four, five, six, seven, eight, nine
one = Math.ceil(Math.random() * 9)
two = Math.ceil(Math.random() * 9)
three = Math.ceil(Math.random() * 9)
four = Math.ceil(Math.random() * 9)
five = Math.ceil(Math.random() * 9)
six = Math.ceil(Math.random() * 9)
seven = Math.ceil(Math.random() * 9)
eight = Math.ceil(Math.random() * 9)
nine = Math.ceil(Math.random() * 9)
one = one * 2
five = five * 2
nine = nine * 2
let matriz = [[one, two, three], [four, five, six], [seven, eight, nine]]
console.log(matriz)

// 7. Crie uma matriz de ordem 2 e calcule o determinante. A cada execução do script os valores da matriz devem ser gerados aleatoriamente.

var um, dois, tres, quatro, determin
um = Math.ceil(Math.random() * 99)
dois = Math.ceil(Math.random() * 99)
tres = Math.ceil(Math.random() * 99)
quatro = Math.ceil(Math.random() * 99)
let matriz2 = [[um, dois], [tres, quatro]]
determin = (um * quatro) - (dois * tres)
console.log(matriz2)
console.log("Determinante: ", determin)