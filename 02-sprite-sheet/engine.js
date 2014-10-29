// Alien Invasion utiliza duck typing para implementar como dibujar
// elementos en la pantalla (método draw()) y para que actualicen su
// estado cada vez que el bucle de animación marca un nuevo paso
// (método step()).
//
// Estos dos métodos son implementados por: las pantallas iniciales y
// final del juego, los sprites que se muestran en la pantalla
// (jugador, enemigo, proyectiles, y los elementos como el marcador de
// puntuación o el número de vidas.


// Objeto singleton SpriteSheet: se guarda una unica instancia del
// constructor anónimo en el objeto SpriteSheet
var SpriteSheet = new function() {

    // Almacena nombre_de_sprite: rectángulo para que sea mas facil
    // gestionar los sprites del fichero images/sprite.png
    this.map = { }; 

    // Para cargar hoja de sprites. 
    //
    // Parámetros: spriteData: parejas con nombre de sprite, rectángulo
    // callback: para llamarla cuando se haya cargado la hoja de
    // sprites
    this.load = function(spriteData,callback) { 
	this.map = spriteData;
	this.image = new Image();
	this.image.onload = callback;
	this.image.src = 'images/sprites.png';
    };

 
    // Para dibujar sprites individuales en el contexto de canvas ctx
    //
    // Parámetros: contexto, string con nombre de sprite para buscar
    //  en this.map, x e y en las que dibujarlo, y opcionalmente,
    //  frame para seleccionar el frame de un sprite que tenga varios
    //  como la explosion
    this.draw = function(ctx,sprite,x,y,frame) {
	var s = this.map[sprite];
	if(!frame) frame = 0;
	ctx.drawImage(this.image,
                      s.sx + frame * s.w, 
                      s.sy, 
                      s.w, s.h, 
                      Math.floor(x), Math.floor(y),
                      s.w, s.h);
    };
}

