const game = {
  'suspects' : [
    {
      name: "Rusty",
      color: "orange"
    }, {
      name: "Miss Scarlet",
      color: "red"
    }
  ]
}

game["suspects"]
//returns
//  (2) [{…}, {…}]
//  0: {name: "Rusty", color: "orange"}
//  1: {name: "Miss Scarlet", color: "red"}
//  length: 2
//  __proto__: Array(0)


function seeSuspects() {
  for (var i = 0; i < game.suspects.length; i++) {
    console.log(game.suspects[i])
  }
}

seeSuspects()
