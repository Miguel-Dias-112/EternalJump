function inter(repetiçõeSS, padrão){
    let tempo =  10*repetiçõeSS;

    let vetor = [];
    for(let i = 0; i < tempo; i++){
        vetor.push(padrão)
    }// [x1,x2,x2]
    return vetor;
}
function descompacta(vetor){
    let novo = [];
    vetor.forEach((element)=>{
        novo = novo.concat(element);
    })
    return novo;

}
const fases ={
    1:{
        intervalos : []
        .concat(inter(1, [1,1,1]))
        .concat(inter(1, [1,2,1]))
        .concat(inter(1, [1,1,1]))
        .concat(inter(1, [2,1,1]))
        .concat(inter(1, [1,1,1]))
        .concat(inter(1, [1,2,1]))
        .concat(inter(1, [1,1,1]))
        .concat(inter(1, [2,1,1]))
        .concat(inter(1, [1,2,1]))
        .concat(inter(1, [1,1,2]))
        .concat(inter(1, [2,1,1]))
        .concat(inter(1, [1,1,2]))
        .concat(inter(1, [1,2,1]))
        .concat(inter(1, [1,1,1]))

        .concat(inter(1, [1,2,1]))
        .concat(inter(1, [1,1,1]))
        .concat(inter(1, [2,1,1]))
        .concat(inter(1, [1,1,1]))
        .concat(inter(1, [1,2,1]))
        .concat(inter(1, [1,1,1]))
        .concat(inter(1, [2,1,1]))
        .concat(inter(1, [1,2,1]))
        .concat(inter(1, [1,1,2]))
        .concat(inter(1, [2,1,1]))
        .concat(inter(1, [1,1,2]))
        .concat(inter(1, [1,2,1]))
        .concat(inter(1, [1,1,1]))

        .concat(inter(1, [1,2,1]))
        .concat(inter(1, [1,1,1]))
        .concat(inter(1, [2,1,1]))
        .concat(inter(1, [1,1,1]))
        .concat(inter(1, [1,2,1]))
        .concat(inter(1, [1,1,1]))
        .concat(inter(1, [2,1,1]))
        .concat(inter(1, [1,2,1]))
        .concat(inter(1, [1,1,2]))
        .concat(inter(1, [2,1,1]))
        .concat(inter(1, [1,1,2]))
        .concat(inter(1, [1,2,1]))
        .concat(inter(1, [1,1,1]))

        .concat(inter(1, [1,2,1]))
        .concat(inter(1, [1,1,1]))
        .concat(inter(1, [2,1,1]))
        .concat(inter(1, [1,1,1]))
        .concat(inter(1, [1,2,1]))
        .concat(inter(1, [1,1,1]))
        .concat(inter(1, [2,1,1]))
        .concat(inter(1, [1,2,1]))
        .concat(inter(1, [1,1,2]))
        .concat(inter(1, [2,1,1]))
        .concat(inter(1, [1,1,2]))
        .concat(inter(1, [1,2,1]))
        .concat(inter(1, [1,1,1]))


        .concat(inter(1, [1,2,1]))
        .concat(inter(1, [1,1,1]))
        .concat(inter(1, [2,1,1]))
        .concat(inter(1, [1,1,1]))
        .concat(inter(1, [1,2,1]))
        .concat(inter(1, [1,1,1]))
        .concat(inter(1, [2,1,1]))
        .concat(inter(1, [1,2,1]))
        .concat(inter(1, [1,1,2]))
        .concat(inter(1, [2,1,1]))
        .concat(inter(1, [1,1,2]))
        .concat(inter(1, [1,2,1]))
        .concat(inter(1, [1,1,1]))
    },
    2: {
        intervalos : []
        .concat(inter(1, [1,1,1]))
        .concat(inter(1, [1,2,1]))
        .concat(inter(1, [1,1,1]))
        .concat(inter(1, [2,1,1]))
        .concat(inter(1, [1,1,1]))
        .concat(inter(1, [1,2,1]))
        .concat(inter(1, [1,1,1]))
        .concat(inter(1, [2,1,1]))
        .concat(inter(1, [1,2,1]))
        .concat(inter(1, [1,1,2]))
        .concat(inter(1, [2,1,1]))
        .concat(inter(1, [1,1,2]))
        .concat(inter(1, [1,2,1]))
        .concat(inter(1, [1,1,1]))
    },
    3: {
        intervalos : []
        .concat(inter(1, [1,1,1]))
        .concat(inter(1, [1,2,1]))
        .concat(inter(1, [1,1,1]))
        .concat(inter(1, [2,1,1]))
        .concat(inter(1, [1,1,1]))
        .concat(inter(1, [1,2,1]))
        .concat(inter(1, [1,1,1]))
        .concat(inter(1, [2,1,1]))
        .concat(inter(1, [1,2,1]))
        .concat(inter(1, [1,1,2]))
        .concat(inter(1, [2,1,1]))
        .concat(inter(1, [1,1,2]))
        .concat(inter(1, [1,2,1]))
        .concat(inter(1, [1,1,1]))
    }
}
function getFase(fase){
    return fases[fase]; 
}
export default getFase;