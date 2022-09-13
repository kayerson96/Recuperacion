function generarPDF(){

    // Variables para obtener los datos de los campos
    let pedido = document.getElementById('num41').value;
    let completo = document.getElementById('nombre2').value;
    let direccion = document.getElementById('direccion3').value;
 
    var documentoPDF = new jsPDF();
    documentoPDF.setFontSize(20);
    documentoPDF.text(15, 15, 'Reporte de Ventas');
    documentoPDF.setFontSize(12);
    documentoPDF.text(20, 30, 'Fecha: ' + new Date());
    documentoPDF.setFontSize(10);
    documentoPDF.text(20, 40, 'pedido: ' + pedido);
    documentoPDF.text(20, 50, 'completo: ' + completo);
    documentoPDF.text(20, 60, 'direccion: ' + direccion);
    documentoPDF.save('Satisfaccion');
}