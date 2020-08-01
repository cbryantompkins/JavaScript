const game2 = {}
undefined
game2['suspects'] = [];
//[]
game2.suspects.push({
    name: 'Rusty',
    color: 'orange'
});
//1
game2.suspects.push({
    name: 'Miss Scarlet',
    color: 'red'
});
//2
game2.suspects
/*
0:
color: "orange"
name: "Rusty"
__proto__: Object
1:
color: "red"
name: "Miss Scarlet"
*/
//result in code form
const game = {
    'suspects': [
        {
            name: "Rusty",
            color: "orange"
        },
        {
            name: "Miss Scarlet",
            color: "red"
        }
    ]
}

var gameLoop = function() {
debugger
  for (var i = 0; i < game2.suspects.length; i++) {
    console.log('outer loop');
      for (var key in game2.suspects[i]) {
        console.log(game2.suspects[i][key]);
    }
  }
}
