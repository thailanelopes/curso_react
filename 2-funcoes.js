//declarando uma funcao

function ola(){

    return 'Ola!';

}

// console.log(ola());

//funcao com argumentos

function olaPessoa(nome){
    return `Ola ${nome}!` //concatenou a variavel na string
}

// console.log(olaPessoa('Joao') );


//Arrow functions

const ola2 = () => {
    return 'Ola novamente!'

}

// console.log( ola2() );

const olaPessoa2 = (nome, idade) => {
    return `Ola novamente ${nome}, sua idade e ${idade}!`
}

console.log(olaPessoa2('Joao', 20))


/////

const olaPessoa3 = nome => `Ola novamente ${nome}`

console.log(olaPessoa3('Joao'))