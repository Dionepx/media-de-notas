let nota1 = 3
let nota2 = 5
let nota3 = 6


let media = (nota1 + nota2 + nota3) / 3

if (media < 5) {
     console.log('Reprovado')
} else if (media >= 5 && media <= 7) {
     console.log('Recuperação')
} else {
     console.log('Aprovado')
}