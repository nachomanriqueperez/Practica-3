var sprites = {
    ship: { sx: 0, sy: 0, w: 37, h: 42, frames: 1 },
    missile: { sx: 0, sy: 30, w: 2, h: 10, frames: 1 },
    enemy_purple: { sx: 37, sy: 0, w: 42, h: 43, frames: 1 },
    enemy_bee: { sx: 79, sy: 0, w: 37, h: 43, frames: 1 },
    enemy_ship: { sx: 116, sy: 0, w: 42, h: 43, frames: 1 },
    enemy_circle: { sx: 158, sy: 0, w: 32, h: 33, frames: 1 }
};

var startGame = function() {
    SpriteSheet.draw(Game.ctx,"ship",0,0);
    SpriteSheet.draw(Game.ctx,"missile",150,50);
    SpriteSheet.draw(Game.ctx,"missile",155,50);
    SpriteSheet.draw(Game.ctx,"missile",160,50);
    SpriteSheet.draw(Game.ctx,"enemy_purple",100,50);
    SpriteSheet.draw(Game.ctx,"enemy_bee",150,100);
    SpriteSheet.draw(Game.ctx,"enemy_ship",150,150);
    SpriteSheet.draw(Game.ctx,"enemy_circle",150,200);
}

$(function() {
    Game.initialize("game",sprites,startGame);
});



