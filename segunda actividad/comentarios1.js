// Arreglo de denominaciones de billetes disponibles en el cajero automático
const denominations = [50000, 20000, 10000, 5000, 2000, 1000];

// Función para obtener la cantidad de dinero a retirar ingresada por el usuario
function getWithdrawalAmount() {
  const userInput = prompt("¿Cuánto dinero deseas retirar?");
  return parseFloat(userInput);
}

// Función para calcular la cantidad de billetes necesarios de cada denominación
function calculateBilletsNeeded(amount) {
  return denominations.map(denomination => {
    const billetsNeeded = Math.floor(amount / denomination);
    amount -= billetsNeeded * denomination;
    return billetsNeeded;
  });
}

// Función para verificar si la cantidad de dinero a retirar es válida
function isValidWithdrawalAmount(amount) {
  return amount > 0 && amount % 1 === 0;
}

// Función principal para realizar la transacción en el cajero automático
function ATMTransaction() {
  const withdrawalAmount = getWithdrawalAmount();

  if (!isValidWithdrawalAmount(withdrawalAmount)) {
    alert("El monto solicitado no es válido.");
    return;
  }

  const billetsNeeded = calculateBilletsNeeded(withdrawalAmount);

  // se pone alert para abrir una ventana emergente que diga cuanto necesita para retirar
  alert("Para retirar $" + withdrawalAmount + ", necesitas:");
  denominations.forEach((denomination, index) => {
    if (billetsNeeded[index] > 0) {
      alert("- " + billetsNeeded[index] + " billetes de $" + denomination);
    }
  });
}

// Iniciar la transacción en el cajero automático
ATMTransaction();