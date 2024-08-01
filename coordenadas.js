function convertirPolarARectangular() {
    const r = parseFloat(document.getElementById('r').value);
    const theta = parseFloat(document.getElementById('theta').value);

    if (isNaN(r) || isNaN(theta)) {
        document.getElementById('resultadoPolar').innerText = 'Por favor, ingrese valores válidos.';
        return;
    }

    const radianes = theta * (Math.PI / 180);
    const x = r * Math.cos(radianes);
    const y = r * Math.sin(radianes);

    document.getElementById('resultadoPolar').innerText = `Coordenadas Rectangulares: X = ${x.toFixed(2)}, Y = ${y.toFixed(2)}`;
}

function convertirRectangularAPolar() {
    const x = parseFloat(document.getElementById('x').value);
    const y = parseFloat(document.getElementById('y').value);

    if (isNaN(x) || isNaN(y)) {
        document.getElementById('resultadoRectangular').innerText = 'Por favor, ingrese valores válidos.';
        return;
    }

    const r = Math.sqrt(x * x + y * y);
    const theta = Math.atan2(y, x) * (180 / Math.PI);

    document.getElementById('resultadoRectangular').innerText = `Coordenadas Polares: Radio = ${r.toFixed(2)}, Ángulo = ${theta.toFixed(2)}°`;
}