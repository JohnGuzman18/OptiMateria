$(document).ready(function() {
    const nombre = $("#inputNombre").val();
    const provincia = $("#inputProvincia").val();
    const ciudad = $("#inputCiudad").val();
    const sector = $("#inputSector").val();
    const calle = $("#inputCalle").val();
    const carrera = $("#inputCarreras").val();


    //Funcion validar
    function validate(){
        let isvalid= true;
        $("#elrequerido").css("visibility", "hidden");

        const valuenNombre = $("#inputNombre").val();
        const valueProvincia = $("#inputProvincia").val();
        const valueCiudad= $("#inputCiudad").val();
        const valueSector = $("#inputSector").val();
        const valueCalle = $("#inputCalle").val();
        const valueCarreras = $("#inputCarreras").val();
        
    
    if(valuenNombre == "" || valuenNombre == null || valuenNombre == undefined){
        isvalid =false;
        $("#inputNombre").addClass("input-error");
        $("#inputNombre").removeClass("input-success");
    }else{
        $("#inputNombre").addClass("input-success");
        $("#inputNombre").removeClass("input-error");
    }
    
    
    if(valueProvincia == "" || valueProvincia == null || valueProvincia == undefined){
        isvalid =false;
        $("#inputProvincia").addClass("input-error");
        $("#inputProvincia").removeClass("input-success");
    }else{
        $("#inputProvincia").addClass("input-success");
        $("#inputProvincia").removeClass("input-error");
    }
    
    if(valueCiudad == "" || valueCiudad == null || valueCiudad == undefined){
        isvalid =false;
        $("#inputCiudad").addClass("input-error");
        $("#inputCiudad").removeClass("input-success");
    }else{
        $("#inputCiudad").addClass("input-success");
        $("#inputCiudad").removeClass("input-error");
    
    }
    
    
    if(valueSector == "" || valueSector == null || valueSector == undefined){
        isvalid =false;
        $("#inputSector").addClass("input-error");
        $("#inputSector").removeClass("input-success");
    }else{
        $("#inputSector").addClass("input-success");
        $("#inputSector").removeClass("input-error");
    }
    
    
    if(valueCalle == "" || valueCalle == null || valueCalle == undefined){
        isvalid =false;
        $("#inputCalle").addClass("input-error");
        $("#inputCalle").removeClass("input-success");
    }else{
        $("#inputCalle").addClass("input-success");
        $("#inputCalle").removeClass("input-error");
    }
    
    if(valueCarreras == "" || valueCarreras == null || valueCarreras == undefined){
        isvalid =false;
        $("#inputCarreras").addClass("input-error");
        $("#inputCalle").removeClass("input-success");
    }else{
        $("#inputCarreras").addClass("input-success");
        $("#inputCarreras").removeClass("input-error");
    
    }
    
    return isvalid;
}
    


    //limpiar formulario
    $("#btn-limpiar").click(function() {
        $('#formulario').trigger("reset");
    });

    //Escondemos el  contenedor2 y el 3
    $('#container2').hide();
    $('#container3').hide();
    
    //Permite capturar el valor de nuestro formulario y salta al apartado de seleccion de materias
    $("#btn-siguiente").click(function() {
        
        const nombre = $("#inputNombre").val();
        const provincia = $("#inputProvincia").val();
        const ciudad = $("#inputCiudad").val();
        const sector = $("#inputSector").val();
        const calle = $("#inputCalle").val();
        const carrera = $("#inputCarreras").val();

        if(!validate()){
            alert("Porfavor llena todos los campos")
            return 
    
        } else{

            $('#container1').hide();
            $('#ol-actual-page').html("<li class='breadcrumb-item'><a onclick='volverHome();' href='#'>Home</a></li><li class='breadcrumb-item active' aria-current='page'>Seleccionar Horarios</li>");
            $('#container2').html('<div class="card" id="horario-card"><div class="card-header bg-secondary text-center text-white"><h4>Seleccionar horario</h4></div><div class="card-body" id="resultadofinal-conteier"></div></div>');
            $('#container2').show();

            if (carrera === 'Multimedia') {
                $('#resultadofinal-conteier').html('<form onsubmit="return false;"><table class="table table-hover"><thead><tr><th>Nombre de las clases</th><th>Horarios</th></tr></thead><tbody><tr><td><input type="text" value="Introduccion a la multimedia" id="carrera-1" readonly="readonly"></td><td><label><input type="radio" id="horario-1" name="horario-1" class="form-check-input" value="Lunes">Lunes - 8 am/12 pm</label><label><input type="radio" id="horario-1" class="form-check-input" value="Martes" name="horario-1">Martes - 8 am/12 pm</label><label><input type="radio" id="horario-1" class="form-check-input" value="Miercoles" name="horario-1">Miercoles - 8 am/12 pm</label></td></tr><tr><td><input type="text" value="Diseño 3D" readonly="readonly" id="carrera-2"></td>' +
                    '<td><label><input type="radio" id="horario-2" name="horario-2" class="form-check-input" value="Lunes">Lunes - 8 am/12 pm</label><label><input type="radio" id="horario-2" class="form-check-input" value="Martes" name="horario-2">Martes - 8 am/12 pm</label><label><input type="radio" id="horario-2" class="form-check-input" value="Miercoles" name="horario-2">Miercoles - 8 am/12 pm</label></td></tr><tr><td><input type="text" value="Fotografia" readonly="readonly" id="carrera-3"></td><td><label><input type="radio" id="horario-3" name="horario-3" class="form-check-input" value="Lunes">Lunes - 8 am/12 pm</label><label><input type="radio" id="horario-3" class="form-check-input" value="Martes" name="horario-3">Martes - 8 am/12 pm</label><label><input type="radio" id="horario-3" class="form-check-input" value="Miercoles" name="horario-3">Miercoles - 8 am/12 pm</label></td></tr><tr><td><input type="text" value="Razonamiento Critico" readonly="readonly" id="carrera-4"></td>'
                    + '<td><label><input type="radio" id="horario-4" name="horario-4" class="form-check-input" value="Lunes">Lunes - 8 am/12 pm</label><label><input type="radio" id="horario-4" class="form-check-input" value="Martes" name="horario-4">Martes - 8 am/12 pm</label><label><input type="radio" id="horario-4" class="form-check-input" value="Miercoles" name="horario-4">Miercoles - 8 am/12 pm</label></td></tr><tr><td><input type="text" value="Etica 2" readonly="readonly" id="carrera-5"></td><td><label><input type="radio" id="horario-5" name="horario-5" class="form-check-input" value="Lunes">Lunes - 8 am/12 pm</label><label><input type="radio" id="horario-5" class="form-check-input" value="Martes" name="horario-5">Martes - 8 am/12 pm</label><label><input type="radio" id="horario-5" class="form-check-input" value="Miercoles" name="horario-5">Miercoles - 8 am/12 pm</label></td></tr></tbody></table> <button type="submit" class="btn btn-secondary float-end mt-2" id="btn-sen" onclick="resultadoFinal()">Siguiente</button> <button type="submit" class="btn btn-warning float-end mt-2 m-lg-2" id="btn-send2" onclick="volverHome()">Volver</button></form>');
            }
            if (carrera === 'Mecatronica') {
                $('#resultadofinal-conteier').html('<form onsubmit="return false;"><table class="table table-hover"><thead><tr><th>Nombre de las clases</th><th>Horarios</th></tr></thead><tbody><tr><td><input value="Calculo integral" id="carrera-1" readonly="readonly" class="sinBorde"></td><td><label><input type="radio" id="horario-1" name="horario-1" class="form-check-input" value="Lunes 8am - 12pm">Lunes - 8 am/12 pm</label><label><input type="radio" id="horario-1" class="form-check-input" value="Martes" name="horario-1">Martes - 8 am/12 pm</label><label><input type="radio" id="horario-1" class="form-check-input" value="Miercoles" name="horario-1">Miercoles - 8 am/12 pm</label></td></tr><tr><td><input type="text" value="Metrologia" readonly="readonly" id="carrera-2">' +
                    '</td><td><label><input type="radio" id="horario-2" name="horario-2" class="form-check-input" value="Lunes">Lunes - 8 am/12 pm</label><label><input type="radio" id="horario-2" class="form-check-input" value="Martes" name="horario-2">Martes - 8 am/12 pm</label><label><input type="radio" id="horario-2" class="form-check-input" value="Miercoles" name="horario-2">Miercoles - 8 am/12 pm</label></td></tr><tr><td><input type="text" value="Electronica Digital" readonly="readonly" id="carrera-3"></td><td><label><input type="radio" id="horario-3" name="horario-3" class="form-check-input" value="Lunes">Lunes - 8 am/12 pm</label><label><input type="radio" id="horario-3" class="form-check-input" value="Martes" name="horario-3">' +
                    'Martes - 8 am/12 pm</label><label><input type="radio" id="horario-3" class="form-check-input" value="Miercoles" name="horario-3">Miercoles - 8 am/12 pm</label></td></tr><tr><td><input type="text" value="Circuitos electrios 1" readonly="readonly" id="carrera-4"></td><td><label><input type="radio" id="horario-4" name="horario-4" class="form-check-input" value="Lunes">Lunes - 8 am/12 pm</label><label><input type="radio" id="horario-4" class="form-check-input" value="Martes" name="horario-4">Martes - 8 am/12 pm</label><label><input type="radio" id="horario-4" class="form-check-input" value="Miercoles" name="horario-4">Miercoles - 8 am/12 pm</label></td></tr><tr><td><input type="text" value="Lab Circuitos electicos 1" readonly="readonly" id="carrera-5">' +
                    '</td><td><label><input type="radio" id="horario-5" name="horario-5" class="form-check-input" value="Lunes">Lunes - 8 am/12 pm</label><label><input type="radio" id="horario-5" class="form-check-input" value="Martes" name="horario-5">Martes - 8 am/12 pm</label><label><input type="radio" id="horario-5" class="form-check-input" value="Miercoles" name="horario-5">Miercoles - 8 am/12 pm</label></td></tr></tbody></table><button type="submit" class="btn btn-secondary float-end mt-2" id="btn-sen" onclick="resultadoFinal()">Siguiente</button> <button type="submit" class="btn btn-warning float-end mt-2 m-lg-2" id="btn-send2" onclick="volverHome()">Volver</button></form>');
            }
            if (carrera === 'Software') {
                $('#resultadofinal-conteier').html('<form onsubmit="return false;"><table class="table table-hover"><thead><tr><th>Clases</th><th>Horarios</th></tr></thead><tbody><tr><td><input value="Pogramacion 1" id="carrera-1" readonly="readonly" class="sinBorde"></td><td><label><input type="radio" id="horario-1" name="horario-1" class="form-check-input" value="Lunes">Lunes - 8 am/12 pm</label><label><input type="radio" id="horario-1" class="form-check-input" value="Martes" name="horario-1">Martes - 8 am/12 pm</label><label><input type="radio" id="horario-1" class="form-check-input" value="Miercoles" name="horario-1">Miercoles - 8 am/12 pm</label></td></tr><tr><td><input type="text" value="Programacion 2" readonly="readonly" id="carrera-2"></td><td><label>' +
                    '<input type="radio" id="horario-2" name="horario-2" class="form-check-input" value="Lunes">Lunes - 8 am/12 pm</label><label><input type="radio" id="horario-2" class="form-check-input" value="Martes" name="horario-2">Martes - 8 am/12 pm</label><label><input type="radio" id="horario-2" class="form-check-input" value="Miercoles" name="horario-2">Miercoles - 8 am/12 pm</label></td></tr><tr><td><input type="text" value="Redaccion castellana" readonly="readonly" id="carrera-3"></td><td><label><input type="radio" id="horario-3" name="horario-3" class="form-check-input" value="Lunes">Lunes - 8 am/12 pm</label><label><input type="radio" id="horario-3" class="form-check-input" value="Martes" name="horario-3">Martes - 8 am/12 pm</label>' +
                    '<label><input type="radio" id="horario-3" class="form-check-input" value="Miercoles" name="horario-3">Miercoles - 8 am/12 pm</label></td></tr><tr><td><input type="text" value="Programacion 3" readonly="readonly" id="carrera-4"></td><td><label><input type="radio" id="horario-4" name="horario-4" class="form-check-input" value="Lunes">Lunes - 8 am/12 pm</label><label><input type="radio" id="horario-4" class="form-check-input" value="Martes" name="horario-4">Martes - 8 am/12 pm</label><label><input type="radio" id="horario-4" class="form-check-input" value="Miercoles" name="horario-4">Miercoles - 8 am/12 pm</label></td></tr><tr><td><input type="text" value="Historia universal" readonly="readonly" id="carrera-5"></td><td><label>' +
                    '<input type="radio" id="horario-5" name="horario-5" class="form-check-input" value="Lunes">Lunes - 8 am/12 pm</label><label><input type="radio" id="horario-5" class="form-check-input" value="Martes" name="horario-5">Martes - 8 am/12 pm</label><label><input type="radio" id="horario-5" class="form-check-input" value="Miercoles" name="horario-5">Miercoles - 8 am/12 pm</label></td></tr></tbody></table><button type="submit" class="btn btn-secondary float-end mt-2" id="btn-sen" onclick="resultadoFinal()">Siguiente</button> <button type="submit" class="btn btn-warning float-end mt-2 m-lg-2" id="btn-send2" onclick="volverHome()">Volver</button> </form>');                                                       
            }
        }    
    });
});

//Es la parte de la pagina donde se muestran los datos de la persona y las materias seleccionadas
    const resultadoFinal = () => {
        const nombre = $("#inputNombre").val();
        const provincia = $("#inputProvincia").val();
        const ciudad = $("#inputCiudad").val();
        const sector = $("#inputSector").val();
        const calle = $("#inputCalle").val();
        const carrera = $("#inputCarreras").val();
        horario = [
          
        ];


        if ($("input:radio[name='horario-1']").is(":checked")) {
            horario.push({ "Materia": $("#carrera-1").val(), "Dia": $('input[name="horario-1"]:checked').val() });
        }
        if ($("input:radio[name='horario-2']").is(":checked")) {
            horario.push({ "Materia": $("#carrera-2").val(), "Dia": $('input[name="horario-2"]:checked').val() });
        }
        if ($("input:radio[name='horario-3']").is(":checked")) {
            horario.push({ "Materia": $("#carrera-3").val(), "Dia": $('input[name="horario-3"]:checked').val() });
        }
        if ($("input:radio[name='horario-4']").is(":checked")) {
            horario.push({ "Materia": $("#carrera-4").val(), "Dia": $('input[name="horario-4"]:checked').val() });
        }

        if ($("input:radio[name='horario-5']").is(":checked")) {
            horario.push({ "Materia": $("#carrera-5").val(), "Dia": $('input[name="horario-5"]:checked').val() });
        }
 
        $('#container2').hide();
        $('#ol-actual-page').html("<li class='breadcrumb-item'><a onclick='volverHome();' href='#'>Home</a></li> <li class='breadcrumb-item'><a onclick='volverCarrera();' href='#'>Seleccionar Horario</a></li> <li class='breadcrumb-item' aria-current='page'>Resultado Final</li>");
        $('#container3').show();
        $('#container3').html('');
        $('#container3').append(' <div class="card" id="horario-card"><div class="card-header bg-secondary text-center text-white"><h4>Datos</h4></div>  <div class="card-body" id="resultadoFinal"></div></div>');
        $('#resultadoFinal').append(`
<ul class="list-group  mt-2">
    <li class="list-group-item">Nombre: ${nombre}</li>
    <li class="list-group-item">Provincia: ${provincia}</li>
    <li class="list-group-item">Ciudad: ${ciudad}</li>
    <li class="list-group-item">Sector: ${sector}</li>
    <li class="list-group-item">Calle: ${calle}</li>
    <li class="list-group-item">Carrera: ${carrera}</li>
  </ul>`);
        $('#resultadoFinal').append('<table class="table table-striped table-hover float-end mt-2">  <h4 class="card-title mt-2 text-center">Horario</h4>  <thead><tr><th>Lunes</th><th>Martes</th><th>Miercoles</th><th>Jueves</th><th>Viernes</th></tr></thead><tbody id="tabla-cuerpo"></tbody>'+
        '</table><button class="btn btn-secondary float-end m-lg-2" onclick="terminar()">Registrar</button><button class="btn btn-warning float-end m-lg-2" onclick="volverCarrera()">Volver</button>');
        horario.map((horario) => {
            if (horario.Dia === 'Lunes') {
                $("#tabla-cuerpo").append(`<tr><td>${horario.Materia}</td><td> </td> <td> </td> <td> </td> <td> </td></tr>`);
            }
            if (horario.Dia === 'Martes') {
                $("#tabla-cuerpo").append(`<tr><td> </td><td>${horario.Materia}</td> <td> </td> <td> </td> <td> </td></tr>`);
            }
            if (horario.Dia === 'Miercoles') {
                $("#tabla-cuerpo").append(`<tr><td> </td><td> </td><td>${horario.Materia}</td><td> </td><td> </td></tr>`);
            }
        }
        );
    };
//Permite volver al formulrio inicial
    function volverHome()  {
        $('#container2').hide();
        $('#container3').hide();
        $('#ol-actual-page').html("<li class='breadcrumb-item active' aria-current='page'>Home</li>");
        $('#container1').show();
    };
//Permite volver a la pagina donde se seleccionan las materias
    function volverCarrera()  {
        $('#container3').hide();
        $('#container1').hide();
        $('#ol-actual-page').html("<li class='breadcrumb-item'><a onclick='volverHome();' href='#'>Home</a></li><li class='breadcrumb-item active' aria-current='page'>Seleccionar Horarios</li>");
        $('#container2').show();
    };
//Funcion para terminar el registro
    const terminar = () => {
        $("#inputNombre").val("");
        $("#inputProvincia").val("");
       $("#inputCiudad").val("");
        $("#inputSector").val("");
        $("#inputCalle").val("");
       
        $("#inputNombre").removeClass("input-success");
        $("#inputProvincia").removeClass("input-success");
       $("#inputCiudad").removeClass("input-success");
        $("#inputSector").removeClass("input-success");
        $("#inputCalle").removeClass("input-success");
        $("#inputCarreras").removeClass("input-success");
       


        alert("Registro Exitoso")
        $('#container3').hide();
    $('#container1').show();
    $('#ol-actual-page').html("<li class='breadcrumb-item'><a onclick='goBackPersonalInfo();' href='#'>Home</a></li>");
      

            };



   