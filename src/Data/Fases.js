function inter(segundos, padrão, gambiarra, meia){
    let m = 0.42857142857142857142857142857143;
    let tempo =  9*(segundos-1)*m;
    let vetor = [];
    
    
    if(!gambiarra){
        for (let i = 0; i < (6); i++) {
            let padraoSatBaixa = padrão.slice()
            for (let x = 0; x < padrão.length; x++) {
                if(padrão[x]==2){
                    padraoSatBaixa[x]="preview"
                }
           }
           vetor.push(padraoSatBaixa)
        }
    }
    
    
    for(let i = 0; i < tempo-1; i++){
        vetor.push(padrão)
    }// [x1,x2,x2]

    if(segundos==2){
        for (let i = 0; i < (3); i++) {
            let padraoSatBaixa = padrão.slice()
            for (let x = 0; x < padrão.length; x++) {
                if(padrão[x]==2){
                    padraoSatBaixa[x]="wrongTime"
                }
           }
           
           vetor.push(padraoSatBaixa)
        }
        for (let i = 0; i < (3); i++) {
            let padraoSatBaixa = padrão.slice()
            for (let x = 0; x < padrão.length; x++) {
                if(padrão[x]==2){
                    padraoSatBaixa[x]=1
                }
           }
           
           vetor.push(padraoSatBaixa)
        }
    }

    console.log(vetor)
    return vetor;
}


const fases ={
    1:{
        intervalos : []
        .concat(inter(4, ["preview","preview","preview",0],true))
        .concat(inter(4, ["preview","preview","preview",1],false))

        .concat(inter(4, [1,1,2,2],false))
        .concat(inter(4, [1,1,2,3],false))

        .concat(inter(4, [1,2,1,4],false))
        .concat(inter(4, [1,2,1,5],false))

        .concat(inter(4, [1,1,2,6],false))
        .concat(inter(4, [1,1,2,7],false))

        .concat(inter(4, [2,1,1,8],false))
        .concat(inter(4, [2,1,1,9],false))

        .concat(inter(4, [1,1,2,10],false))
///12
        .concat(inter(4, [1,1,1,11],false))
///12
        .concat(inter(4, [1,1,2,12],false))
        .concat(inter(4, [1,1,2,13],false))
        .concat(inter(4, [1,1,2,14],false))
        .concat(inter(4, [1,1,2,15],false))

        .concat(inter(4, [1,2,1,16],false))
        .concat(inter(4, [1,2,1,17],false))
        .concat(inter(4, [2,1,1,18],false))
        .concat(inter(4, [2,1,1,19],false))

        .concat(inter(4, [1,1,2,19],false))
///24
        .concat(inter(4, [1,1,1,20],false))
///24

        .concat(inter(2, [1,1,2,21],false))
        .concat(inter(2, [1,1,2,22],false))
        .concat(inter(2, [1,1,2,23],false))
        .concat(inter(2, [1,1,2,24],false))

        .concat(inter(2, [1,2,1,25],false))
        .concat(inter(2, [1,2,1,26],false))
        .concat(inter(2, [1,1,2,27],false))
        .concat(inter(2, [1,1,2,28],false))

        .concat(inter(2, [2,1,1,29],false))
        .concat(inter(2, [1,2,1,30],false))
        .concat(inter(2, [1,1,2,31],false))
        .concat(inter(2, [1,1,2,32],false))
        .concat(inter(2, [1,1,2,33],false))

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