var articulos = ["libreta", "lapiz", "borrador de goma", "bolso"];

document.write("<p>");

document.write(articulos[0] + "<br>");

articulos.unshift("Tijeras");

document.write(articulos[0] +  "<br>");

document.write(articulos[articulos.length-1 + "<br>"]);

articulos.push("sacapuntas", "tablero", 25)

document.write(articulos[articulos.length-1] + "<br>");

articulos.pop();

Document,write(articulos[articulos.length-1+ "<br>"]);

articulos.shift();

document.write(articulos[0] + "<br>");

document.write(articulos.length);

document.write("</p>")