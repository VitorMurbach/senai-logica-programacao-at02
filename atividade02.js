for (let aluno = 0; aluno <= 9; aluno++) {
    if (aluno == 0){
        console.log(`Zero => ${aluno}`)
    } else if ( aluno % 2 == 0){
        console.log(`${aluno} é par.`)
    } else{
        console.log(`${aluno} é ímpar.`)
    }
}