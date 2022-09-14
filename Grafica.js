function generarGrafico(){
    let espacio =document.getElementById('graficos');
    let valor1 =document.getElementById('proteinaham').value;
    let valor2 =document.getElementById('bebidaham').value;
    let valor3 =document.getElementById('postreham').value;
    
    Plotly.newPlot(espacio, [{
        x: [valor1, valor3],
        y: [valor2]}]);
    
    }


    function generarGrafico(){
        let espacio =document.getElementById('graficos1');
        let valor1 =document.getElementById('proteinaham').value;
        let valor2 =document.getElementById('bebidaham').value;
        let valor3 =document.getElementById('postreham').value;
        
        Plotly.newPlot(espacio, [{
            x: [valor1, valor3],
            y: [valor2]}]);
        
        }