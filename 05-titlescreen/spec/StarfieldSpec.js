describe("Clase Starfield", function(){
    // Queremos crear la animacion de un fondo de estrellas que se mueven
    // detras de las naves del juego para crear el efecto de movimiento de
    // las naves en el espacio.
    
    // Cada objeto de clase Starfield debera ofrecer la interfaz step(),
    // draw(), para que pueda ser actualizado y dibujado en el canvas por
    // el bucle del juego
    
    // Debera haber varios planos distintos de estrellas. Cada estrella
    // sera un pequeno rectangulo blanco. Cada plano de estrellas se
    // debera mover a velocidad distinta para crear un efecto de paralaje
    
    var canvas, ctx;

    beforeEach(function(){
	// Hemos enlazado en jasmine/spec/javascript/fixtures el fichero index.html
	loadFixtures('index.html');

	canvas = $('#game')[0];
	expect(canvas).toExist();

	ctx = canvas.getContext('2d');
	expect(ctx).toBeDefined();

    });


    it("draw + step + draw", function(){
	spyOn(ctx, "drawImage");

	// Ponemos velocidad 1 para testar mas facilmente
	var sf1 = new Starfield(1,0.4,100,true);
	
	sf1.draw(ctx);
	
 	expect(ctx.drawImage.calls[0].args[1]).toBe(0);
 	expect(ctx.drawImage.calls[0].args[2]).toBe(0);
 	expect(ctx.drawImage.calls[0].args[3]).toBe(320);
 	expect(ctx.drawImage.calls[0].args[4]).toBe(480);
 	expect(ctx.drawImage.calls[0].args[5]).toBe(0);
 	expect(ctx.drawImage.calls[0].args[6]).toBe(0);
 	expect(ctx.drawImage.calls[0].args[7]).toBe(320);
 	expect(ctx.drawImage.calls[0].args[8]).toBe(480);

	sf1.step(1); // dt = 1 =>  offset == dt*speed == 1*1 == 1
	sf1.draw(ctx);
 	expect(ctx.drawImage.calls[1].args[1]).toBe(0);
 	expect(ctx.drawImage.calls[1].args[2]).toBe(479);
  	expect(ctx.drawImage.calls[1].args[3]).toBe(320);
  	expect(ctx.drawImage.calls[1].args[4]).toBe(1);
  	expect(ctx.drawImage.calls[1].args[5]).toBe(0);
  	expect(ctx.drawImage.calls[1].args[6]).toBe(0);
  	expect(ctx.drawImage.calls[1].args[7]).toBe(320);
  	expect(ctx.drawImage.calls[1].args[8]).toBe(1);

 	expect(ctx.drawImage.calls[2].args[1]).toBe(0);
 	expect(ctx.drawImage.calls[2].args[2]).toBe(0);
  	expect(ctx.drawImage.calls[2].args[3]).toBe(320);
  	expect(ctx.drawImage.calls[2].args[4]).toBe(479);
  	expect(ctx.drawImage.calls[2].args[5]).toBe(0);
  	expect(ctx.drawImage.calls[2].args[6]).toBe(1);
  	expect(ctx.drawImage.calls[2].args[7]).toBe(320);
  	expect(ctx.drawImage.calls[2].args[8]).toBe(479);

    });

});

