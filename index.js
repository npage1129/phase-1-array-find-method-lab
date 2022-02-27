// //
// const superbowlWin = array => (array === "W")? array.year : undefined;
// console.log(record.find(superbowlWin))
 
function superbowlWin(array){
    let conclusion = undefined
    for(const game of array){
        if(game.result === "W"){
             conclusion = game.year;
            break;

        }

    }
   return conclusion; 
}
superbowlWin.find(record);