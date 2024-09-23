// Función para cargar los datos desde la hoja de cálculo
fetch('URL_DE_TU_APPS_SCRIPT')
  .then(response => response.json())
  .then(data => {
      const tablaPacientes = document.getElementById('tablaPacientes').getElementsByTagName('tbody')[0];

      data.forEach((paciente, index) => {
          const row = tablaPacientes.insertRow();

          row.insertCell(0).innerText = paciente.nombre;
          row.insertCell(1).innerText = paciente.cedula;
          row.insertCell(2).innerText = paciente.facultad;
          row.insertCell(3).innerText = paciente.carrera;
          row.insertCell(4).innerText = paciente.curso;
          row.insertCell(5).innerText = paciente.sintomas;
          
          const editarCell = row.insertCell(6);
          const editarBtn = document.createElement('button');
          editarBtn.innerText = 'Editar';
          editarBtn.onclick = () => editarFicha(index);
          editarCell.appendChild(editarBtn);
      });
  })
  .catch(error => console.error('Error:', error));

// Función para editar una ficha
function editarFicha(index) {
    // Redirigir a una página de edición con el índice del paciente
    window.location.href = `editar.html?index=${index}`;
}
