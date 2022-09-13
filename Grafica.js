function generarGrafico(){
    let espacio =document.getElementById('graficos');
    let valor1 =document.getElementById('satisfecho').value;
    let valor2 =document.getElementById('llamativo').value;
    let valor3 =document.getElementById('satisfaccion').value;
    
    Plotly.newPlot(espacio, [{
        x: [valor1, valor3],
        y: [valor2]}]);
    
    }


    function generarGrafico(){
        let espacio =document.getElementById('graficos1');
        let valor1 =document.getElementById('satisfecho1').value;
        let valor2 =document.getElementById('llamativo2').value;
        let valor3 =document.getElementById('satisfaccion3').value;
        
        Plotly.newPlot(espacio, [{
            x: [valor1, valor3],
            y: [valor2]}]);
        
        }