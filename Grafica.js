function generarGrafico(){
    let espacio =document.getElementById('graficos');
    let valor1 =document.getElementById('satisfecho').value;
    let valor2 =document.getElementById('llamativo').value;
    let valor3 =document.getElementById('satisfaccion').value;
    
    Plotly.newPlot(espacio, [{
        x: [valor1, valor3],
        y: [valor2]}]);
    
    }


    