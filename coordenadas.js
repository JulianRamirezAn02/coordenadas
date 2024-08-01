//Funciones que modifican web
function convertirPolarARectangular() {
    const r = parseFloat(document.getElementById('r').value);
    const theta = parseFloat(document.getElementById('theta').value);

    if (isNaN(r) || isNaN(theta)) {
        document.getElementById('resultadoPolar').innerText = 'Por favor, ingrese valores válidos.';
        return;
    }
    [xx,yy]=polarARectagngular(r,theta)

    document.getElementById('resultadoPolar').innerText = `Coordenadas Rectangulares: X = ${xx.toFixed(2)}, Y = ${yy.toFixed(2)}`;
}

function convertirRectangularAPolar() {
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);

    if (isNaN(x) || isNaN(y)) {
        document.getElementById('resultadoRectangular').innerText = 'Por favor, ingrese valores válidos.';
        return;
    }
    
    [ra,the]=rectangularAPolar(x,y);
    document.getElementById('resultadoRectangular').innerText = `Coordenadas Polares: Radio = ${ra.toFixed(2)}, Ángulo = ${the.toFixed(2)}°`;
}
//Funciones generales
function polarARectagngular(r,theta) {

    const radianes = theta * (Math.PI / 180);
    const x = r * Math.cos(radianes);
    const y = r * Math.sin(radianes);

    return  [x,y]
}
function rectangularAPolar(x,y) {

    const r = Math.sqrt(x * x + y * y);
    const theta = Math.atan2(y, x) * (180 / Math.PI);

    return  [r,theta]
}