// Arreglo para representar los asientos de la Sala 1, inicialmente todos están libres (false)
const sala1 = Array(10).fill(false);

// Arreglo para representar los asientos de la Sala 2, inicialmente todos están libres (false)
const sala2 = Array(10).fill(false);

// Función para mostrar la disponibilidad de asientos en ambas salas
function verDisponibilidad() {
  alert("Sala 1:");
  alert(sala1.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
  alert("Sala 2:");
  alert(sala2.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
}

// Función para reservar un asiento en la sala seleccionada por el usuario
function reservarAsiento() {
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const asiento = parseInt(prompt("Ingresa el número del asiento (1 a 10)")) - 1;

  if ((sala === "1" || sala === "2") && asiento >= 0 && asiento < 10) {
    if (sala === "1" && !sala1[asiento]) {
      sala1[asiento] = true;
      alert(`Asiento ${asiento + 1} de la sala 1 reservado.`);
    } else if (sala === "2" && !sala2[asiento]) {
      sala2[asiento] = true;
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
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const asientosLibres = sala === "1" ? sala1.filter(asiento => !asiento).length : sala2.filter(asiento => !asiento).length;

  if (asientosLibres > 0) {
    alert(`Hay ${asientosLibres} asientos libres en la sala ${sala}.`);
    alert("¡Disfrutad de la película!");
  } else {
    alert(`Lo siento, todos los asientos de la sala ${sala} están reservados.`);
  }
}

// Bucle para mostrar el menú y manejar las opciones seleccionadas por el usuario
while (true) {
  const opcion = prompt("Bienvenido a la sala de cine\nSelecciona una opción:\n1. Ver disponibilidad de asientos\n2. Reservar asiento\n3. Ver ocupación sala\n4. Salir");

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
      alert("¡Hasta luego!");
      break;
    default:
      alert("Opción no válida. Intenta de nuevo.");
  }
}
