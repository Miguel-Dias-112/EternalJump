function inter(segundos, padrão, gambiarra,m){
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

    if(segundos==2 ){
        for (let i = 0; i < (3); i++) {
            let padraoSatBaixa = padrão.slice()
            for (let x = 0; x < padrão.length; x++) {
                if(padrão[x]==2){
                    padraoSatBaixa[x]="wrongTime"
                }
           }
           
           vetor.push(padraoSatBaixa)
        }
        for (let i = 0; i < (2); i++) {
            let padraoSatBaixa = padrão.slice()
            for (let x = 0; x < padrão.length; x++) {
                if(padrão[x]==2){
                    padraoSatBaixa[x]=1
                }
           }
           
           vetor.push(padraoSatBaixa)
        }
    }

    return vetor;
}

let m140BPM = 0.42857142857142857142857142857143
let m120BPM = 0.5000000000000000000000000000000

const fases ={
    1:{
        intervalos : []
        .concat(inter(4, ["preview","preview","preview",0],true,m140BPM))
        .concat(inter(4, ["preview","preview","preview",1],false,m140BPM))

        .concat(inter(4, [1,1,2,2],false, m140BPM))
        .concat(inter(4, [1,1,2,3],false, m140BPM))

        .concat(inter(4, [1,2,1,4],false, m140BPM))
        .concat(inter(4, [1,2,1,5],false, m140BPM))

        .concat(inter(4, [1,1,2,6],false, m140BPM))
        .concat(inter(4, [1,1,2,7],false, m140BPM))

        .concat(inter(4, [2,1,1,8],false, m140BPM))
        .concat(inter(4, [2,1,1,9],false, m140BPM))

        .concat(inter(4, [1,1,2,10],false, m140BPM))
///12
        .concat(inter(4, [1,1,1,11],false, m140BPM))
///12
        .concat(inter(4, [1,1,2,12],false, m140BPM))
        .concat(inter(4, [1,1,2,13],false, m140BPM))
        .concat(inter(4, [1,1,2,14],false, m140BPM))
        .concat(inter(4, [1,1,2,15],false, m140BPM))

        .concat(inter(4, [1,2,1,16],false, m140BPM))
        .concat(inter(4, [1,2,1,17],false, m140BPM))
        .concat(inter(4, [2,1,1,18],false, m140BPM))
        .concat(inter(4, [2,1,1,19],false, m140BPM))

        .concat(inter(4, [1,1,2,19],false, m140BPM))
///24
        .concat(inter(4, [1,1,1,20],false, m140BPM))
///24

        .concat(inter(2, [1,1,2,21],false, m140BPM))
        .concat(inter(2, [1,1,2,22],false, m140BPM))
        .concat(inter(2, [1,1,2,23],false, m140BPM))
        .concat(inter(2, [1,1,2,24],false, m140BPM))

        .concat(inter(2, [1,2,1,25],false, m140BPM))
        .concat(inter(2, [1,2,1,26],false, m140BPM))
        .concat(inter(2, [1,1,2,27],false, m140BPM))
        .concat(inter(2, [1,1,2,28],false, m140BPM))

        .concat(inter(2, [2,1,1,29],false, m140BPM))
        .concat(inter(2, [1,2,1,30],false, m140BPM))
        .concat(inter(2, [1,1,2,31],false, m140BPM))
        .concat(inter(2, [1,1,2,32],false, m140BPM))
        .concat(inter(2, [1,1,2,33],false, m140BPM))

    },
    2: {
        intervalos : []
        .concat(inter(2, [1,1,1,0],true,m120BPM))

        .concat(inter(4, [1,1,1,1],false, m120BPM))
        .concat(inter(2, [1,2,1,2],false, m120BPM))
        .concat(inter(2, [1,1,2,3],false, m120BPM))
        .concat(inter(2, [2,1,1,4],false, m120BPM))
        
        .concat(inter(2, [1,2,1,5],false, m120BPM))
        .concat(inter(2, [1,2,1,6],false, m120BPM))
        .concat(inter(2, [1,1,2,7],false, m120BPM))
        .concat(inter(2, [1,1,2,8],false, m120BPM))
        .concat(inter(2, [1,2,1,9],false, m120BPM))
        .concat(inter(4, [1,1,1,10],false, m120BPM))
        .concat(inter(2, [1,2,1,11],false, m120BPM))
        .concat(inter(2, [1,1,2,12],false, m120BPM))
        .concat(inter(2, [1,2,1,13],false, m120BPM))
        .concat(inter(2, [1,2,1,14],false, m120BPM))
        .concat(inter(4, [1,1,1,15],false, m120BPM))
        .concat(inter(2, [2,1,1,16],false, m120BPM))
        .concat(inter(2, [1,2,1,17],false, m120BPM))
        .concat(inter(2, [1,2,1,18],false, m120BPM))
        .concat(inter(2, [1,1,2,19],false, m120BPM))
        .concat(inter(2, [2,1,1,20],false, m120BPM))
        .concat(inter(2, [1,2,1,21],false, m120BPM))
        .concat(inter(2, [1,2,1,22],false, m120BPM))
        .concat(inter(2, [1,1,2,23],false, m120BPM))
        .concat(inter(2, [1,1,2,24],false, m120BPM))
        .concat(inter(2, [1,2,1,25],false, m120BPM))
        .concat(inter(2, [2,1,1,26],false, m120BPM))
        .concat(inter(2, [1,2,1,27],false, m120BPM))
        .concat(inter(2, [1,1,2,28],false, m120BPM))
        .concat(inter(2, [1,2,1,29],false, m120BPM))
        .concat(inter(2, [2,1,1,30],false, m120BPM))
        .concat(inter(2, [1,2,1,31],false, m120BPM))
        .concat(inter(2, [2,1,1,32],false, m120BPM))
        .concat(inter(2, [1,2,1,33],false, m120BPM))
        .concat(inter(2, [1,2,1,34],false, m120BPM))
        .concat(inter(2, [1,1,2,35],false, m120BPM))
        .concat(inter(2, [2,1,1,36],false, m120BPM))
        .concat(inter(2, [1,1,2,37],false, m120BPM))
        .concat(inter(2, [1,2,1,38],false, m120BPM))
        .concat(inter(2, [1,2,1,39],false, m120BPM))
        .concat(inter(2, [2,1,1,40],false, m120BPM))
        .concat(inter(2, [1,2,1,41],false, m120BPM))
        .concat(inter(2, [1,2,1,42],false, m120BPM))
        .concat(inter(2, [1,1,2,43],false, m120BPM))
        .concat(inter(2, [2,1,1,44],false, m120BPM))
        .concat(inter(2, [1,1,2,45],false, m120BPM))
        .concat(inter(2, [1,2,1,46],false, m120BPM))
        .concat(inter(2, [1,2,1,47],false, m120BPM))
        .concat(inter(2, [2,1,1,48],false, m120BPM))
        .concat(inter(2, [1,2,1,49],false, m120BPM))
        .concat(inter(2, [1,2,1,50],false, m120BPM))
        .concat(inter(2, [1,1,2,51],false, m120BPM))

        .concat(inter(2, [2,1,1,52],false, m120BPM))
        .concat(inter(2, [1,1,2,53],false, m120BPM))
        .concat(inter(2, [1,2,1,54],false, m120BPM))
        .concat(inter(2, [1,2,1,55],false, m120BPM))
        .concat(inter(2, ["preview","preview","preview",55],false, m120BPM))

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