function startGame() {

    var canvas = document.getElementById('game');
    var ctx = canvas.getContext && canvas.getContext('2d');

    if(!ctx) {
	alert('Please upgrade your browser');
	return;
    }

    SpriteSheet.load({
	ship: { sx: 0, sy: 0, w: 37, h: 42, frames: 1 },
        missile: { sx: 0, sy: 30, w: 2, h: 10, frames: 1 },
        enemy_purple: { sx: 37, sy: 0, w: 42, h: 43, frames: 1 },
        enemy_bee: { sx: 79, sy: 0, w: 37, h: 43, frames: 1 },
        enemy_ship: { sx: 116, sy: 0, w: 42, h: 43, frames: 1 },
        enemy_circle: { sx: 158, sy: 0, w: 32, h: 33, frames: 1 },
	explosion: { sx: 0, sy: 64, w: 64, h: 64, frames: 12 }
    }, function() {
	SpriteSheet.draw(ctx,"ship",0,0);
	SpriteSheet.draw(ctx,"missile",150,50);
	SpriteSheet.draw(ctx,"missile",155,50);
	SpriteSheet.draw(ctx,"missile",160,50);
	SpriteSheet.draw(ctx,"enemy_purple",100,50);
	SpriteSheet.draw(ctx,"enemy_bee",150,100);
	SpriteSheet.draw(ctx,"enemy_ship",150,150);
	SpriteSheet.draw(ctx,"enemy_circle",150,200);

	// Anade aqui llamadas para mostrar varios frames de las
	// explosiones, y anade tests para comprobar que se han
	// ejecutado en spec/spritesheetSpec.js

	SpriteSheet.draw(ctx,"explosion",200,0,1);
	SpriteSheet.draw(ctx,"explosion",200,64,2);
	SpriteSheet.draw(ctx,"explosion",200,128,3);
	SpriteSheet.draw(ctx,"explosion",200,192,4);
	SpriteSheet.draw(ctx,"explosion",200,256,5);
	SpriteSheet.draw(ctx,"explosion",200,320,6);
	SpriteSheet.draw(ctx,"explosion",200,384,7);
	SpriteSheet.draw(ctx,"explosion",264,192,4);
	SpriteSheet.draw(ctx,"explosion",264,256,5);
	SpriteSheet.draw(ctx,"explosion",264,320,6);
	SpriteSheet.draw(ctx,"explosion",264,384,7);


    });
}

$(startGame);
