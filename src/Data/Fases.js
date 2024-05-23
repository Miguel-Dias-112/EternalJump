function inter(segundos, padrão, gambiarra){
    let m = 0.42857142857142857142857142857143;
    let tempo =  9*(segundos-1)*m;
    let vetor = [];
    
    
    if(!gambiarra){
        for (let i = 0; i < (segundos+2); i++) {
            let padraoSatBaixa = padrão.slice()
            for (let x = 0; x < padrão.length; x++) {
                if(padrão[x]==2){
                    padraoSatBaixa[x]=3
                }
           }
           vetor.push(padraoSatBaixa)
        }
    }
    
    
    for(let i = 0; i < tempo-1; i++){
        vetor.push(padrão)
    }// [x1,x2,x2]
    console.log(vetor)
    return vetor;
}


const fases ={
    1:{
        intervalos : []
        
        .concat(inter(4, [1,1,1],true))
        .concat(inter(4, [1,1,1],false))

        .concat(inter(4, [1,1,2],false))
        .concat(inter(4, [1,1,2],false))

        .concat(inter(4, [1,2,1],false))
        .concat(inter(4, [1,2,1],false))

        .concat(inter(4, [1,1,2],false))
        .concat(inter(4, [1,1,2],false))

        .concat(inter(4, [2,1,1],false))
        .concat(inter(4, [2,1,1],false))

        .concat(inter(4, [1,1,2],false))
///12
        .concat(inter(4, [1,1,1],false))
///12
        .concat(inter(4, [1,1,2],false))
        .concat(inter(4, [1,1,2],false))
        .concat(inter(4, [1,1,2],false))
        .concat(inter(4, [1,1,2],false))

        .concat(inter(4, [1,2,1],false))
        .concat(inter(4, [1,2,1],false))
        .concat(inter(4, [2,1,1],false))
        .concat(inter(4, [2,1,1],false))

        .concat(inter(4, [1,1,2],false))
///24
        .concat(inter(4, [1,1,1],false))
///24

        .concat(inter(4, [1,1,2],false))
        .concat(inter(4, [1,1,2],false))
        .concat(inter(4, [1,1,2],false))
        .concat(inter(4, [1,1,2],false))

        .concat(inter(4, [1,2,1],false))
        .concat(inter(4, [1,2,1],false))
        .concat(inter(4, [1,1,2],false))
        .concat(inter(4, [1,1,2],false))

        .concat(inter(4, [2,1,1],false))
        .concat(inter(4, [1,2,1],false))
        .concat(inter(4, [1,1,2],false))
        .concat(inter(4, [1,1,2],false))
        .concat(inter(4, [1,1,2],false))

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