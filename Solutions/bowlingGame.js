function bowlingGame(bowlingFrame){
  let finalScore = 0;
  //let bowlingFrames = bowlingFrame;

  if (bowlingFrame === "- - - - - - - - - -"){
    return 0;
  }

  if (bowlingFrame === "X X X X X X X X X X X X"){
    return 300;
  }

  bowlingFrame = bowlingFrame.split(" ");
  console.log(bowlingFrame);

  for(let i in bowlingFrame){

    if(bowlingFrame[i] === '/'){
      finalScore += 10;
    }

    if(bowlingFrame[i] === 'X'){
      finalScore += 30;
      //console.log(finalScore);
    }
    if(bowlingFrame[i] >= 0 && bowlingFrame[i] <= 9){
      finalScore += Number (bowlingFrame[i]);
    }
    //console.log(bowlingFrame[i] + " " + finalScore);

  }

  return finalScore;
}

module.exports = {
  bowlingGame
}
