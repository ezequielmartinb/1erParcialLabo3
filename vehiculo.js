class Vehiculo
{
    id = 0;
    modelo = "";
    anoFab = 0;
    velMax = 0;

    constructor(id,modelo,anoFab,velMax)
    {                
        this.id = id;  
        this.modelo = modelo;
        this.anoFab = anoFab; 
        this.velMax = velMax;                         
    }
    toString() 
    {
        return this.id + " - " + this.modelo + " - " + this.anoFab + " - " + this.velMax;
    }            
}
class Aereo extends Vehiculo
{
    altMax = 0;
    autonomia = 0;
    constructor(id, modelo, anoFab, velMax, altMax, autonomia) 
    {
        super(id,modelo,anoFab,velMax);
        
        this.autonomia = autonomia;
        this.altMax = altMax;
        
    } 
    toString() 
    {
        var retorno = super.toString() + " - " + this.autonomia + " - " + this.altMax;
        return retorno;
    }                       
}
class Terrestre extends Vehiculo
{
    cantPue = -1;
    cantRue = 0;
    constructor(id, modelo, anoFab, velMax, cantPue, cantRue) 
    {
        super(id, modelo, anoFab, velMax);
        this.cantPue = cantPue;
        this.cantRue = cantRue;                
    } 
    toString() 
    {
        var retorno = super.toString() + " - " + this.cantPue + " - " + this.cantRue;
        return retorno;
    }                       
}

function CargarDatosTabla()
{
    var tabla = document.getElementById("datosTabla");    
    tabla.innerHTML="";    
    
    switch(document.getElementById("filter").value)
    {
           
        case "terrestre":
        BorrarDatosTabla();
        listaTerrestres.forEach((terrestre) => 
        {               
            var row = document.createElement('tr');  
            
            let altMax = 'N/A';
            let autonomia = 'N/A';           

            let cantPue = 'N/A';
            if (terrestre.cantPue > -1) 
            {
                cantPue = terrestre.cantPue;
            }

            let cantRue = 'N/A';
            if (terrestre.cantRue > 0)
            {
                cantRue = terrestre.cantRue;
            }
            row.addEventListener('click', function() 
            {
                ObtenerDatosFila(this);
            });
            row.innerHTML = `
                <td class="id">${terrestre.id}</td>
                <td class="modelo">${terrestre.modelo}</td>
                <td class="anoFab">${terrestre.anoFab}</td>
                <td class="velMax">${terrestre.velMax}</td>
                <td class="cantPue">${cantPue}</td>
                <td class="cantRue">${cantRue}</td>
                <td class="altMax">${altMax}</td>
                <td class="autonomia">${autonomia}</td>
            `;
            
            tabla.appendChild(row);
        });
        break;            
        case "aereo":
        BorrarDatosTabla();
        listaAereos.forEach((aereos) => 
        {               
            var row = document.createElement('tr');  
            
            let altMax = 'N/A';
            if (aereos.altMax > 0) 
            {
                altMax = aereos.altMax;
            }

            let autonomia = 'N/A';
            if (aereos.autonomia > 0) 
            {
                autonomia = aereos.autonomia;            
            }
            let cantPue = 'N/A';
            let cantRue = 'N/A';
            

            row.innerHTML = `
                <td class="id">${aereos.id}</td>
                <td class="modelo">${aereos.modelo}</td>
                <td class="anoFab">${aereos.anoFab}</td>
                <td class="velMax">${aereos.velMax}</td>
                <td class="cantPue">${cantPue}</td>
                <td class="cantRue">${cantRue}</td>
                <td class="altMax">${altMax}</td>
                <td class="autonomia">${autonomia}</td>
            `;
            row.addEventListener('click', function() 
            {
                ObtenerDatosFila(this);
            });
            tabla.appendChild(row);
        });
        break;
        default:
        BorrarDatosTabla();
        listaVehiculos.forEach((vehiculo) => 
        {   
            var row = document.createElement('tr');  
            
            let altMax = 'N/A';
            if (vehiculo.altMax > 0) 
            {
                altMax = vehiculo.altMax;
            }

            let autonomia = 'N/A';
            if (vehiculo.autonomia > 0) 
            {
                autonomia = vehiculo.autonomia;            
            }

            let cantPue = 'N/A';
            if (vehiculo.cantPue > -1) 
            {
                cantPue = vehiculo.cantPue;
            }

            let cantRue = 'N/A';
            if (vehiculo.cantRue > 0)
            {
                cantRue = vehiculo.cantRue;
            }

            row.innerHTML = `
                <td class="id">${vehiculo.id}</td>
                <td class="modelo">${vehiculo.modelo}</td>
                <td class="anoFab">${vehiculo.anoFab}</td>
                <td class="velMax">${vehiculo.velMax}</td>
                <td class="cantPue">${cantPue}</td>
                <td class="cantRue">${cantRue}</td>
                <td class="altMax">${altMax}</td>
                <td class="autonomia">${autonomia}</td>
            `;
            row.addEventListener('click', function() 
            {
                ObtenerDatosFila(this);
            });
            tabla.appendChild(row);
        });
    }
}
function ObtenerId()
{
    id = 0;
    listaVehiculos.forEach(vehiculo => 
    {
        if(vehiculo.id > id)
        {
            id = vehiculo.id;
        }
    });

    return id + 1;
}
function CambiarAtributos() 
{
    
    const tipo = document.getElementById('tipoVehiculo').value;
    const labelAtributo1 = document.getElementById('labelAtributo1');
    const labelAtributo2 = document.getElementById('labelAtributo2');
    const labelAtributo3 = document.getElementById('labelAtributo3');
    const extraAtributos = document.getElementById('extraAtributos');
    const labelAtributo4 = document.getElementById('labelAtributo4');
    const labelAtributo5 = document.getElementById('labelAtributo5');
    const atributo4 = document.getElementById('atributo4');
    const atributo5 = document.getElementById('atributo5');   

    switch(tipo) {
        case "aereo":
            labelAtributo1.textContent = 'Modelo:';
            labelAtributo2.textContent = 'Año Fabricacion:';
            labelAtributo3.textContent = 'Velocidad Maxima:';
            labelAtributo4.textContent = 'Altura Maxima:';
            labelAtributo5.textContent = 'Autonomia:';
            extraAtributos.style.display = 'block'; 
            break;
        case "terrestre":
            labelAtributo1.textContent = 'Modelo:';
            labelAtributo2.textContent = 'Año Fabricacion:';
            labelAtributo3.textContent = 'Velocidad Maxima:';
            labelAtributo4.textContent = 'Cantidad Puertas:';
            labelAtributo5.textContent = 'Cantidad Ruedas:';
            extraAtributos.style.display = 'block'; 
            break;
        default:
            extraAtributos.style.display = 'none'; 
            break;
    }
}
function CalcularPromedioVelocidadMaxima() 
{
    const totalVelocidadMaxima = listaVehiculos.reduce((sum, vehiculo) => sum + vehiculo.velMax, 0);
    const promedio = totalVelocidadMaxima / listaVehiculos.length;
    document.getElementById('promedio_velocidad_maxima').value = promedio.toFixed(2);
}      
function CrearVehiculo()
{
    BorrarDatosTabla();
    var id = document.getElementById("id").value;
    if (id === null || id === "")
    {
        var modelo = document.getElementById("atributo1").value;
        var anioFabricacion = document.getElementById("atributo2").value;
        var velMax = document.getElementById("atributo3").value;
        var tipoVehiculo = document.getElementById("tipoVehiculo").value;       
        
        var error = true;
        var existeElVehiculo = false;
        if(modelo != null && modelo != "" && anioFabricacion > 1885 && velMax > 0)
        {
            switch(tipoVehiculo)
            {
                case "terrestre":
                    var cantPuertas = document.getElementById("atributo4").value;
                    var cantRuedas = document.getElementById("atributo5").value;
                    if(cantPuertas > -1 && cantRuedas > 0)
                    {
                        var id = ObtenerId();
                        listaTerrestres.forEach((vehiculo)=>
                        {
                            if(vehiculo.modelo == modelo && vehiculo.anoFab == anioFabricacion && vehiculo.velMax == velMax && vehiculo.cantPue == cantPuertas && vehiculo.cantRue == cantRuedas)
                            {
                                existeElVehiculo = true;
                                alert("EL AEREO INGRESADO YA EXISTE Y ESTÁ EN LA LISTA");

                            }
                        });
                        if(existeElVehiculo == false)
                        {
                            var nuevoTerrestre = new Terrestre(id, modelo, anioFabricacion, velMax, cantPuertas, cantRuedas);
                            listaTerrestres.push(nuevoTerrestre);
                            listaVehiculos.push(nuevoTerrestre);
                            error = false;                 
                        }
                    }
                    break;

                case "aereo":
                    var altMax = document.getElementById("atributo4").value;
                    var autonomia = document.getElementById("atributo5").value;
                    if(altMax > 0 && autonomia > 0)
                    {
                        var id = ObtenerId();
                        listaAereos.forEach((vehiculo)=>
                        {
                            if(vehiculo.modelo == modelo && vehiculo.anoFab == anioFabricacion && vehiculo.velMax == velMax && vehiculo.altMax == altMax && vehiculo.autonomia == autonomia)
                            {
                                existeElVehiculo = true;
                                alert("EL AEREO INGRESADO YA EXISTE Y ESTÁ EN LA LISTA");
                            }
                        });
                        if(existeElVehiculo == false)
                        {
                            var nuevoAereo = new Aereo(id, modelo, anioFabricacion, velMax, altMax, autonomia);
                            listaAereos.push(nuevoAereo);
                            listaVehiculos.push(nuevoAereo);
                            error = false;                
                        }
                        
                    }
                    break;
            }
        }

        if(error)
        {
            alert("Datos erroneos");
        }
        else
        {
            alert("Datos han sido cargados correctamente");           
        }        
    }
    else
    {
        alert("Error. Vehiculo existente");
    }    
    CargarDatosTabla();
}
function BorrarDatosTabla()   
{
    const tbody = document.getElementById('datosTabla');
    tbody.innerHTML = ''; 
}
function MostrarColumna(idColumna) 
{
    var column = document.getElementById(idColumna);
    var fila = document.querySelectorAll('#vehiculo-table-body td:nth-child(' + (column.cellIndex + 1) + ')');
    
    if (column.style.display === "none") 
    {
        column.style.display = "";
        fila.forEach(function(cell) 
        {
            cell.style.display = "";
        });
    } 
    else 
    {
        column.style.display = "none";
        fila.forEach(function(cell) 
        {
            cell.style.display = "none";
        });
    }
}
function OrdenarPorId()
{
    BorrarDatosTabla();
    listaVehiculos.sort((a, b) => a.id - b.id);
    listaAereos.sort((a, b) => a.id - b.id);
    listaTerrestres.sort((a, b) => a.id - b.id);
    CargarDatosTabla();        
}
function OrdenarPorModelo()
{    
    BorrarDatosTabla();
    listaVehiculos.sort((a, b) => a.modelo.localeCompare(b.modelo));
    listaAereos.sort((a, b) => a.modelo.localeCompare(b.modelo));
    listaTerrestres.sort((a, b) => a.modelo.localeCompare(b.modelo));
    CargarDatosTabla();
}
function OrdenarPorAnioFabricacion()
{
    BorrarDatosTabla();
    listaVehiculos.sort((a, b) => a.anoFab - b.anoFab);
    listaAereos.sort((a, b) => a.anoFab - b.anoFab);
    listaTerrestres.sort((a, b) => a.anoFab - b.anoFab);
    CargarDatosTabla();
}
function OrdenarPorVelMaxima()
{
    BorrarDatosTabla();
    listaVehiculos.sort((a, b) => a.velMax - b.velMax);
    listaAereos.sort((a, b) => a.velMax - b.velMax);
    listaTerrestres.sort((a, b) => a.velMax - b.velMax);
    CargarDatosTabla();
}
function OrdenarPorAltMaxima()
{
    BorrarDatosTabla();
    listaVehiculos.sort(CompararPorAlturaMaxima);
    listaAereos.sort(CompararPorAlturaMaxima);
    CargarDatosTabla();
}
function CompararPorAlturaMaxima(a, b)
{
    const altMaxA = (a.altMax === "N/A" || a.altMax === undefined) ? -1 : a.altMax;
    const altMaxB = (b.altMax === "N/A" || b.altMax === undefined) ? -1 : b.altMax;
    return altMaxA - altMaxB;
}
function OrdenarPorAutonomia()
{
    BorrarDatosTabla();
    listaVehiculos.sort(CompararPorAutonomia);
    listaAereos.sort(CompararPorAutonomia);
    CargarDatosTabla();
}
function CompararPorAutonomia(a, b)
{
    const autonomiaA = (a.autonomia === "N/A" || a.autonomia === undefined) ? -1 : a.autonomia;
    const autonomiaB = (b.autonomia === "N/A" || b.autonomia === undefined) ? -1 : b.autonomia;
    return autonomiaA - autonomiaB;
}
function OrdenarPorCantRue()
{
    BorrarDatosTabla();
    listaVehiculos.sort(CompararPorCantidadRuedas);
    listaTerrestres.sort(CompararPorCantidadRuedas);
    CargarDatosTabla();
}
function CompararPorCantidadRuedas(a, b)
{
    const cantRueA = (a.cantRue === "N/A" || a.cantRue === undefined) ? -1 : a.cantRue;
    const cantRueB = (b.cantRue === "N/A" || b.cantRue === undefined) ? -1 : b.cantRue;
    return cantRueA - cantRueB;
}
function OrdenarPorCantPue()
{
    BorrarDatosTabla();
    listaVehiculos.sort(CompararPorCantidadPuertas);
    listaTerrestres.sort(CompararPorCantidadPuertas);
    CargarDatosTabla();
}
function CompararPorCantidadPuertas(a, b)
{
    const cantPueA = (a.cantPue === "N/A" || a.cantPue === undefined) ? -1 : a.cantPue;
    const cantPueB = (b.cantPue === "N/A" || b.cantPue === undefined) ? -1 : b.cantPue;
    return cantPueA - cantPueB;
}
function ObtenerDatosFila(fila) 
{
    var datos = [];
    var celdas = fila.querySelectorAll('td');

    celdas.forEach(function(celda) 
    {
        datos.push(celda.textContent);
    });
    
    if(datos[4] != 'N/A' && datos[5] != 'N/A')
    {
        terrestreSeleccionado = new Terrestre(datos[0],datos[1],datos[2],datos[3],datos[4],datos[5]);
        console.log(terrestreSeleccionado.toString());

        document.getElementById("id").value = datos[0];
        document.getElementById("tipoVehiculo").value = "terrestre";
        document.getElementById("atributo1").value = datos[1];
        document.getElementById("atributo2").value = datos[2];
        document.getElementById("atributo3").value = datos[3];
        document.getElementById("atributo4").value = datos[4];
        document.getElementById("atributo5").value = datos[5];
        document.getElementById("formularioABM").style.display = 'block';
        document.getElementById("aceptar").textContent = "Modificar";
        CambiarAtributos();
    }
    else
    {
        aereoSeleccionado = new Aereo(datos[0],datos[1],datos[2],datos[3],datos[6],datos[7]);
        console.log(aereoSeleccionado.toString());
        document.getElementById("id").value = datos[0];
        document.getElementById("tipoVehiculo").value = "aereo";
        document.getElementById("atributo1").value = datos[1];
        document.getElementById("atributo2").value = datos[2];
        document.getElementById("atributo3").value = datos[3];
        document.getElementById("atributo4").value = datos[6];
        document.getElementById("atributo5").value = datos[7];
        document.getElementById('formularioABM').style.display = 'block';
        document.getElementById("aceptar").textContent = "Modificar";
        CambiarAtributos();
    }
    
}

var jsonVehiculos = '[{"id":14, "modelo":"Ferrari F100", "anoFab":1998, "velMax":400, "cantPue":2, "cantRue":4},{"id":51, "modelo":"Dodge Viper", "anoFab":1991, "velMax":266, "cantPue":2, "cantRue":4},{"id":67, "modelo":"Boeing CH-47 Chinook", "anoFab":1962, "velMax":302, "altMax":6, "autonomia":1200},{"id":666, "modelo":"Aprilia RSV 1000 R", "anoFab":2004, "velMax":280, "cantPue":0, "cantRue":2},{"id":872, "modelo":"Boeing 747-400", "anoFab":1989, "velMax":988, "altMax":13, "autonomia":13450},{"id":742, "modelo":"Cessna CH-1 SkyhookR", "anoFab":1953, "velMax":174, "altMax":3, "autonomia":870}]';
let listaVehiculos = [];
listaVehiculos = JSON.parse(jsonVehiculos);

document.getElementById('agregar').addEventListener('click', function() 
{
    document.getElementById('formularioABM').style.display = 'block';
});
document.getElementById('cancelar').addEventListener('click', function() 
{
    document.getElementById('formularioABM').style.display = 'none';
});
let listaTerrestres = [];
let listaAereos = [];
listaVehiculos.forEach(vehiculo => 
{
    if(vehiculo.cantPue > -1)
    {
        var nuevoTerrestre = new Terrestre(vehiculo.id, vehiculo.modelo, vehiculo.anoFab, vehiculo.velMax, vehiculo.cantPue, vehiculo.cantRue);
        listaTerrestres.push(nuevoTerrestre);
    }
    else if (vehiculo.altMax > 0)
    {
        var nuevoAereo = new Aereo(vehiculo.id, vehiculo.modelo, vehiculo.anoFab, vehiculo.velMax, vehiculo.altMax, vehiculo.autonomia);
        listaAereos.push(nuevoAereo);
    }
});