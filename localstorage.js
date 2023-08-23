//variables globales 
const d = document;
let nombre = d.querySelector(".nombre-pro");
let presentacion = d.querySelector(".presentacion-pro");
let precio = d.querySelector(".precio-pro");
let imagen = d.querySelector(".imagen-pro");
let btnGuardar = d.querySelector(".btn-guardar");

//agregar evento al boton
btnGuardar.addEventListener("click",function() {
    obtenerDatos();
 /*   alert("nombre: "+ nombre.value + "\n"
         +"presentacion: " + presentacion.value+"\n"
         +"precio: " + precio.value + "\n"
         +"urlImagen: " + imagen.value); */
});

//funcion para obtener los datos del formulario
function obtenerDatos() {
    if(nombre.value == "" ||
       presentacion.value == "" ||
       precio.value == "" ||
       imagen.value == ""){
        alert("debes escribir un producto");
    }
    let datos = {
        "nombre": nombre.value,
        "presentacion" : presentacion.value,
        "precio": precio.value,
        "imagen": imagen.value
    }
    nombre.value = "";
    presentacion.value = "";
    precio.value = "" ;
    imagen.value = "";
    //mostrar en consola
    console.log(datos)
    //pasar el objeto a la funcion
    guardarDatos(datos)
}
let productosKey = "productos"
//funcion para guardar los datos en LocalStorage
function guardarDatos( objeto ) {
    let productos = [];
    let proGuardadosEnLocal = JSON.parse(localStorage.getItem(productosKey));
    if(proGuardadosEnLocal != null){
        productos = proGuardadosEnLocal;
    }
    //guardar producto nuevo
    productos.push(objeto);
    //guardar en LocalStorage
    localStorage.setItem(productosKey, JSON.stringify(productos));
    alert("producto guardado con exito");
}













///////////////////////////////////////////////////////////////////////////////////////////////


/*let usuarios = [{
    nombre : "Juan",
    cargo : "Frontend",
    salario : "14000"
},
{    nombre : "claudia",
    cargo : "Dev",
    salario : "12000"
},
{   nombre : "Pedro",
    cargo : "DataBase",
    salario : "13000"
}
];
localStorage.setItem("Datos", JSON.stringify(usuarios));
alert("datos guardados con exito");*/
/*
//JSON.parse()lo que esta guardado lo pasa a estado natural  //JSON.stringify-lo convierte a texto

//guardar datos en el navegador 
localStorage.setItem("Datos", JSON.stringify(usuario));
alert("datos guardados con exito");

//recuperar datos del navegador*/
///obtener datos en el navegador

/*let datos = JSON.parse(localStorage.getItem("Datos"));
datos.forEach((d,i) => {
    document.write(i+"<br>");
    document.write("nombre:" + d.nombre+"<br>");
    document.write("cargo:" + d.cargo+"<br>");
    document.write("salario:" + d.salario+"<br>");
    document.write("<br>");
});*/


/*localStorage.removeItem("Datos");
alert("datos guardados con exito");*/

