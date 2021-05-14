const{
  bowlingGame
} = require("../Solutions/bowlingGame");

describe("bowlingGame", () => {
  test("Returns a score of 0 for all misses; 300 for all strikes", () => {
    expect(bowlingGame("- - - - - - - - - -")).toBe(0);
    expect(bowlingGame("X X X X X X X X X X X X")).toBe(300);
  });

  test("Returns a score of 90 when 10 pairs of 9 and miss are entered", () =>{
    expect(bowlingGame("9- 9- 9- 9- 9- 9- 9- 9- 9- 9-")).toBe(90);
  });

  test("Returns a score of 150 when 10 pairs of 5 and strike and a final 5 is passed", () => {
    expect(bowlingGame("5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5")).toBe(150);
  })
})
