const game = [];
for (let i = 0; i < 5; i++) {
    game.push(i)
    
}
console.log(game);
_.map([1,2,3], function(v,i,list){console.log(v)})

_.each(game, function () {
    game.pop()
});