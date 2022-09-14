function generarPDF(){

    // Variables para obtener los datos de los campos
    let proteina = document.getElementById('proteinaham').value;
    let bebida = document.getElementById('bebidaham').value;
    let postre = document.getElementById('postreham').value;
    let nombre = document.getElementById('nombreham').value;
    let direccion = document.getElementById('direccionham').value;
    let siPapas = document.getElementById('esteesSi');
    if (siPapas.checked == true){
        siPapas = "Si";
    }else{
        siPapas = "No";
    }
    


 
    var documentoPDF = new jsPDF();
    documentoPDF.setFontSize(20);
    documentoPDF.text(15, 15, 'Reporte de Ventas');
    documentoPDF.setFontSize(12);
    documentoPDF.text(20, 30, 'Fecha: ' + new Date());
    documentoPDF.setFontSize(15);
    documentoPDF.text(60, 40, 'Gracias por tu Compra ' + nombre);
    documentoPDF.setFontSize(10);
    documentoPDF.text(20, 50, 'Proteina: ' + proteina);
    documentoPDF.text(20, 60, 'Bebida: ' + bebida);
    documentoPDF.text(20, 70, 'Postre: ' + postre);
    documentoPDF.text(20, 80, 'Porción de Papas: ' + siPapas);
    documentoPDF.text(20, 90, 'Tú pedido fue entregado en ' + direccion);
    documentoPDF.save('Satisfaccion');
}