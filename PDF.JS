// HMABURGUESA

function generarPDF(){

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
    documentoPDF.text(70, 15, 'Reporte de Ventas');
    documentoPDF.setFontSize(12);
    documentoPDF.text(20, 30, 'Fecha: ' + new Date());
    documentoPDF.setFontSize(15);
    documentoPDF.text(70, 40, 'Gracias por tu Compra ' + nombre);
    documentoPDF.setFontSize(10);
    documentoPDF.text(20, 50, 'Proteina: ' + proteina);
    documentoPDF.text(20, 60, 'Bebida: ' + bebida);
    documentoPDF.text(20, 70, 'Postre: ' + postre);
    documentoPDF.text(20, 80, 'Porción de Papas: ' + siPapas);
    documentoPDF.text(20, 90, 'Tú pedido fue entregado en ' + direccion);   
    documentoPDF.save('Satisfaccion');
}

// PERRO CALIENTE
function generarPDF1(){

    let proteina = document.getElementById('salchichaperro').value;
    let bebida = document.getElementById('bebidaperro').value;
    let postre = document.getElementById('postreperro').value;
    let nombre = document.getElementById('nombreperro').value;
    let direccion = document.getElementById('direccionperro').value;
    let personas = document.getElementById('personasperro').value;
    let siPapas = document.getElementById('Siperro');
    if (siPapas.checked == true){
        siPapas = "Si";
    }else{
        siPapas = "No";
    }

    var documentoPDF = new jsPDF();
    documentoPDF.setFontSize(20);
    documentoPDF.text(70, 15, 'Reporte de Ventas');
    documentoPDF.setFontSize(12);
    documentoPDF.text(20, 30, 'Fecha: ' + new Date());
    documentoPDF.setFontSize(15);
    documentoPDF.text(70, 40, 'Gracias por tu Compra ' + nombre);
    documentoPDF.setFontSize(10);
    documentoPDF.text(20, 50, 'Proteina: ' + proteina);
    documentoPDF.text(20, 60, 'Bebida: ' + bebida);
    documentoPDF.text(20, 70, 'Postre: ' + postre);
    documentoPDF.text(20, 80, 'Para cuantas personas: ' + personas);
    documentoPDF.text(20, 90, 'Porción de Papas: ' + siPapas);
    documentoPDF.text(20, 100, 'Tú pedido fue entregado en ' + direccion);   
    documentoPDF.save('Satisfaccion');
}


function generaarPDF(){

    salchipapas
    let proteina1 = document.getElementById('salchichaspapas').value;
    let bebida1 = document.getElementById('bebidasalchi').value;
    let postre1 = document.getElementById('postresalchi').value;
    let nombre1 = document.getElementById('nombresalchi').value;
    let direccion1 = document.getElementById('direccionsalchi').value;
    let personas1 = document.getElementById('personassalchi');
    let siPapas1 = document.getElementById('Sisalchi');
    if (siPapas1.checked == true){
        siPapas = "Si";
    }else{
        siPapas = "No";
    }

    var documentoPDF = new jsPDF();
    documentoPDF.setFontSize(20);
    documentoPDF.text(70, 15, 'Reporte de Ventas');
    documentoPDF.setFontSize(12);
    documentoPDF.text(20, 30, 'Fecha: ' + new Date());
    documentoPDF.setFontSize(15);
    documentoPDF.text(70, 40, 'Gracias por tu Compra ' + nombre1);
    documentoPDF.setFontSize(10);
    documentoPDF.text(20, 50, 'Proteina: ' + proteina1);
    documentoPDF.text(20, 60, 'Bebida: ' + bebida1);
    documentoPDF.text(20, 70, 'Postre: ' + postre1);
    documentoPDF.text(20, 80, 'Para cuantas personas: ' + personas1);
    documentoPDF.text(20, 90, 'Porción de Papas: ' + siPapas1);
    documentoPDF.text(20, 100, 'Tú pedido fue entregado en ' + direccion1);   
    documentoPDF.save('Satisfaccion');
}