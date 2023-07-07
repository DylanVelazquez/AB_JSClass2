class CEmpleado {
  constructor(nombre, anoIngreso, salario, direccion) {
    this.nombre = nombre;
    this.anoIngreso = anoIngreso;
    this.salario = salario;
    this.direccion = direccion;
  }

  calcularAntiguedad() {
    const fechaActual = new Date().getFullYear();
    return fechaActual - this.anoIngreso;
  }

  viveEnWallStreet() {
    return this.direccion.includes('WallStreet');
  }
}

const formulario = document.getElementById('formularioEmpleados');

formulario.addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre1 = document.getElementById('nombre1').value;
  const anoIngreso1 = parseInt(document.getElementById('anioIngreso1').value);
  const salario1 = parseFloat(document.getElementById('salario1').value);
  const direccion1 = document.getElementById('direccion1').value;

  const nombre2 = document.getElementById('nombre2').value;
  const anoIngreso2 = parseInt(document.getElementById('anioIngreso2').value);
  const salario2 = parseFloat(document.getElementById('salario2').value);
  const direccion2 = document.getElementById('direccion2').value;

  const empleado1 = new CEmpleado(nombre1, anoIngreso1, salario1, direccion1);
  const empleado2 = new CEmpleado(nombre2, anoIngreso2, salario2, direccion2);

  console.log('Name\tYear of joining\tAddress');
  console.log(`${empleado1.nombre}\t${empleado1.anoIngreso}\t\t${empleado1.direccion}`);
  console.log(`${empleado2.nombre}\t${empleado2.anoIngreso}\t\t${empleado2.direccion}`);

  console.log(`\nAños de antigüedad de ${empleado1.nombre}: ${empleado1.calcularAntiguedad()}`);
  console.log(`Años de antigüedad de ${empleado2.nombre}: ${empleado2.calcularAntiguedad()}`);

  console.log(`\n${empleado1.nombre} vive en Wall Street: ${empleado1.viveEnWallStreet()}`);
  console.log(`${empleado2.nombre} vive en Wall Street: ${empleado2.viveEnWallStreet()}`);
});
