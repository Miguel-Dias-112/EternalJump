const fases ={
    1:{
        intervalos : [
            [1,2,1],[2,1,1],[1,1,2],
            [1,2,1],[2,1,1],[1,1,2],
            [1,2,1],[2,1,1],[1,1,2],
            [1,2,1],[2,1,1],
         
          ]

    }
}
function getFase(fase){
    return fases[fase]; 
}
export default getFase;