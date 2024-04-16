// Crear arreglos para representar los asientos de las dos salas
const sala1 = Array(10).fill(false);
const sala2 = Array(10).fill(false);

// Inicializar variables para llevar el seguimiento del dinero recaudado en cada sala
let dineroSala1 = 0;
let dineroSala2 = 0;

// Función para mostrar la disponibilidad de asientos en ambas salas
function verDisponibilidad() {
  // Mostrar disponibilidad de asientos para la Sala 1
  alert("Sala 1:");
  alert(sala1.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));

  // Mostrar disponibilidad de asientos para la Sala 2
  alert("Sala 2:");
  alert(sala2.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
}

// Función para reservar un asiento en la sala seleccionada por el usuario
function reservarAsiento() {
  // Solicitar al usuario el número de sala y asiento a reservar
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const asiento = parseInt(prompt("Ingresa el número del asiento (1 a 10)")) - 1;

  // Verificar si la sala y el asiento son válidos
  if ((sala === "1" || sala === "2") && asiento >= 0 && asiento < 10) {
    // Verificar si el asiento está disponible y reservarlo
    if (sala === "1" && !sala1[asiento]) {
      sala1[asiento] = true;
      dineroSala1 += 10; // Agregar el costo de la boleta al dinero recaudado en la Sala 1
      alert(`Asiento ${asiento + 1} de la sala 1 reservado.`);
    } else if (sala === "2" && !sala2[asiento]) {
      sala2[asiento] = true;
      dineroSala2 += 10; // Agregar el costo de la boleta al dinero recaudado en la Sala 2
      alert(`Asiento ${asiento + 1} de la sala 2 reservado.`);
    } else {
      alert("El asiento ya está reservado.");
    }
  } else {
    alert("Número de sala o asiento inválido. Intenta de nuevo.");
  }
}

// Función para verificar la disponibilidad de asientos libres y ver la película en la sala seleccionada
function verPelicula() {
  // Solicitar al usuario el número de sala para ver la película
  const sala = prompt("Ingresa el número de la sala (1 o 2)");

  // Contar el número de asientos libres en la sala seleccionada
  const asientosLibres = sala === "1" ? sala1.filter(asiento => !asiento).length : sala2.filter(asiento => !asiento).length;

  // Mostrar mensaje dependiendo de la disponibilidad de asientos libres
  if (asientosLibres > 0) {
    alert(`Hay ${asientosLibres} asientos libres en la sala ${sala}.`);
    alert("¡Disfrutad de la película!");
  } else {
    alert(`Lo siento, todos los asientos de la sala ${sala} están reservados.`);
  }
}

// Función para mostrar el balance del dinero recaudado en ambas salas
function verBalance() {
  const totalDinero = dineroSala1 + dineroSala2;
  alert(`Dinero recaudado en Sala 1: $${dineroSala1}`);
  alert(`Dinero recaudado en Sala 2: $${dineroSala2}`);
  alert(`Dinero recaudado en total: $${totalDinero}`);
}

// Bucle para mostrar el menú y manejar las opciones seleccionadas por el usuario
while (true) {
  const opcion = prompt("Bienvenido a la sala de cine\nSelecciona una opción:\n1. Ver disponibilidad de asientos\n2. Reservar asiento\n3. Ver ocupación sala\n4. Ver balance\n5. Salir");

  // Manejar la opción seleccionada por el usuario
  switch (opcion) {
    case "1":
      verDisponibilidad();
      break;
    case "2":
      reservarAsiento();
      break;
    case "3":
      verPelicula();
      break;
    case "4":
      verBalance();
      break;
    case "5":
      alert("¡Hasta luego!");
      break;
    default:
      alert("Opción no válida. Intenta de nuevo.");
  }
}
