// Gracias a jasmine-jquery podemos usar matchers tipo jQuery, y
// cargar ficheros HTML, CSS o JSON como fixtures de nuestros tests

describe ("Fichero index.html para el juego Alien Invasion", function(){
    beforeEach(function(){
	// Hemos copiado en jasmine/spec/javascript/fixtures el
	// fichero index.html, quitandole las referencias a ficheros
	// externos como base.css, game.js y jquery-1.10.2.js Ahora lo
	// cargamos para que los tests tengan disponible en el DOM el
	// código HTML de index.html
	loadFixtures('index.html');
    });

    it("incluye jQuery", function(){
	// Este test comprueba que jQuery está disponible en jasmine.
	// Hemos incluído la referencia en SpecRunner.html para que
	// los tests lo tengan disponible
	expect($).toBeDefined();
    });

    it("contiene div", function(){
	// Ahora podemos usar tests jQuery
	expect( $("div#container") ).toExist();
    });

    it("contiene canvas de tamano 320x480", function(){
	expect( $("#container") ).toContain("canvas#game");
	expect( $("canvas#game") ).toHaveAttr('width', '320');
	expect( $("canvas#game") ).toHaveAttr('height', '480');
    });

});


describe("Codigo que manipula el canvas en game.js", function(){
    
    var canvas, ctx;

    beforeEach(function(){
	loadFixtures('index.html');

	canvas = $('#game')[0];
	expect(canvas).toExist();

	ctx = canvas.getContext('2d');
	expect(ctx).toBeDefined();
    });


    it("dibuja rectangulos en el contexto del canvas", function(){
	// Colocamos un espía para el método fillRect de ctx
	spyOn(ctx, 'fillRect');

	// Ahora llamamos a la funcion startGame de game.js para ver
	// si hace lo que debe
	startGame();

	// Deberia haber dibujado estos dos rectangulos
	expect(ctx.fillRect).toHaveBeenCalledWith(50,100,380,400);
	expect(ctx.fillRect).toHaveBeenCalledWith(25,50,380,400);
    });


    it("dibuja imagenes en el contexto del canvas", function(){
	// Colocamos un espía para el método drawImage de ctx
	spyOn(ctx, 'drawImage');

	// Ahora llamamos a la funcion startGame para ver si hace lo
	// que debe (dibujar imágenes de la hoja de sprites)
	startGame();

	// Antes de seguir ejecutando código de este test, damos
	// tiempo para que se haya llamado a img.load
	waits(100);

	// Los expect los ponemos en runs para que sólo se ejecuten al
	// terminar waits(100);
	runs(function(){
	    expect(ctx.drawImage.calls[0].args[1]).toBe(100);
	    expect(ctx.drawImage.calls[0].args[2]).toBe(100);

	    // Anadimos expect para comprobar que se han hecho las otras
	    // dos llamadas a drawImage:

	    // ctx.drawImage(img,    0, 250, 300,   100);
	    expect(ctx.drawImage.calls[1].args[1]).toBe(0);
	    expect(ctx.drawImage.calls[1].args[2]).toBe(250);
	    expect(ctx.drawImage.calls[1].args[3]).toBe(300);
	    expect(ctx.drawImage.calls[1].args[4]).toBe(100);

	    // ctx.drawImage(img,0, 0, 37,    42,     200, 400, 37,    42);
	    expect(ctx.drawImage.calls[2].args[1]).toBe(0);
	    expect(ctx.drawImage.calls[2].args[2]).toBe(0);
	    expect(ctx.drawImage.calls[2].args[3]).toBe(37);
	    expect(ctx.drawImage.calls[2].args[4]).toBe(42);
	    expect(ctx.drawImage.calls[2].args[5]).toBe(200);
	    expect(ctx.drawImage.calls[2].args[6]).toBe(400);
	    expect(ctx.drawImage.calls[2].args[7]).toBe(37);
	    expect(ctx.drawImage.calls[2].args[8]).toBe(42);

	    // No se puede hacer un test para el argumento 0 de
	    // drawImage pues en startGame el primer argumento es var
	    // img, que es una variable declarada dentro de esa
	    // funcion, y por lo tanto no accessible desde fuera:
	    // desde este test. 

	});
    });
});

