let nombre = prompt("Escriba su nombre para iniciar sesion!");

while (nombre != "ESC") {
  if(nombre == "Martin" || nombre == "martin"){
    alert("Bienvenido " + nombre);
    nombre = prompt("Escriba ESC para finalizar la operacion");
  }else if(nombre == "Octavio" || nombre == "octavio"){
    alert("Bienvenido " + nombre);
    nombre = prompt("Escriba ESC para finalizar la operacion");
  }else if(nombre == "Carlos" || nombre == "carlos"){
    alert("Bienvenido " + nombre);
    nombre = prompt("Escriba ESC para finalizar la operacion");
  }else{
    nombre = prompt("Ingresa otro nombre"); 
  }
}
