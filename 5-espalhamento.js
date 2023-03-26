// operador spread (...)

const numeros = [1, 2, 3, 4]

const novosNumeros = [...numeros, 5]

console.log(numeros)
console.log(novosNumeros)


// operador spread (...) com objeto

const rex = {

    nome: 'Rex'
}

const max = {...rex, idade: 2, familia: 'Carnivoro'}

console.log(rex)
console.log(max)


// operador rest (...)

const somar = (...numeros) =>  numeros.reduce( (a, b) => a + b, 0)


console.log( somar(2, 3, 4, 5, 6, 7, 8))