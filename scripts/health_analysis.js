// DOM Elements - Referencias a elementos del DOM
const addPatientButton = document.getElementById("addPatient");
const report = document.getElementById("report");
const btnSearch = document.getElementById('btnSearch');

/**
 * @type {Array<Object>} patients - Array to store patient data
 * @description Almacena la información de todos los pacientes registrados
 */
const patients = [];

/**
 * Adds a new patient to the system
 * @function addPatient
 * @description Recolecta datos del formulario, valida la información y agrega un nuevo paciente al array
 * @returns {void}
 * @throws {Error} Si los campos requeridos están vacíos
 *
 * @example
 * // Ejemplo de uso interno cuando el usuario completa el formulario
 * addPatient(); // Agrega paciente con datos del formulario
 */
function addPatient() {
    // Get form values - Obtener valores del formulario
    const name = document.getElementById("name").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const age = document.getElementById("age").value;
    const condition = document.getElementById("condition").value;

    // Validate and add patient - Validar y agregar paciente
    if (name && gender && age && condition) {
        patients.push({ name, gender: gender.value, age, condition });
        resetForm();
        generateReport();
    }
}

/**
 * Resets all form fields to their default state
 * @function resetForm
 * @description Limpia todos los campos del formulario después de agregar un paciente
 * @returns {void}
 *
 * @example
 * resetForm(); // Limpia el formulario
 */
function resetForm() {
    document.getElementById("name").value = "";
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById("age").value = "";
    document.getElementById("condition").value = "";
}

/**
 * Generates and displays statistical report of patients
 * @function generateReport
 * @description Calcula estadísticas de pacientes y genera un reporte HTML dinámico
 * @returns {void}
 *
 * @example
 * generateReport(); // Genera reporte con datos actuales
 *
 * @todo Agregar más métricas estadísticas
 * @todo Implementar exportación de reportes
 */
function generateReport() {
    const numPatients = patients.length;
    // Initialize condition counters - Inicializar contadores de condiciones
    const conditionsCount = {
        Diabetes: 0,
        Tiroides: 0,
        "Presión Arterial Alta": 0,
    };
    // Initialize gender-based condition counters - Contadores por género
    const genderConditionsCount = {
        Male: {
            Diabetes: 0,
            Tiroides: 0,
            "Presión Arterial Alta": 0,
        },
        Female: {
            Diabetes: 0,
            Tiroides: 0,
            "Presión Arterial Alta": 0,
        },
    };
    // Count conditions and gender-based conditions - Contar condicione
    for (const patient of patients) {
        conditionsCount[patient.condition]++;
        genderConditionsCount[patient.gender][patient.condition]++;
    }
    // Generate HTML report - Generar reporte HTML
    report.innerHTML = `Número Pacientes: ${numPatients}<br><br>`;
    report.innerHTML += `Condiciones Medicas:<br>`;
    for (const condition in conditionsCount) {
        report.innerHTML += `${condition}: ${conditionsCount[condition]}<br>`;
    }
    report.innerHTML += `<br>Genero Condiciones Base:<br>`;
    for (const gender in genderConditionsCount) {
        report.innerHTML += `${gender}:<br>`;
        for (const condition in genderConditionsCount[gender]) {
            report.innerHTML += `&nbsp;&nbsp;${condition}: ${genderConditionsCount[gender][condition]}<br>`;
        }
    }
}
// Event Listeners - Manejadores de eventos
/**
 * @event click
 * @description Event listener para agregar pacientes
 */
addPatientButton.addEventListener("click", addPatient);

/**
 * Searches for health condition information from JSON data
 * @function searchCondition
 * @description Busca información detallada sobre condiciones de salud usando fetch API
 * @returns {Promise<void>}
 * @throws {Error} Si hay problemas con la petición fetch o el archivo JSON
 *
 * @example
 * // Ejemplo de búsqueda (se ejecuta al hacer click en el botón)
 * searchCondition(); // Busca la condición ingresada en el input
 *
 * @see {@link health_analysis.json} Para la estructura de datos esperada
 */
function  searchCondition() {
    // Get search input - Obtener término de búsqueda
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    // Fetch health condition data - Obtener datos de condiciones
    fetch('health_analysis.json')
        .then( response => response.json())
        .then(data => {
            // Find matching condition - Buscar condición coincidente
            const condition =  data.conditions.find(item => item.name.toLowerCase() === input);

            if (condition) {
                // Extract condition details - Extraer detalles
                const symptoms = condition.symptoms.join(', ');
                const prevention = condition.prevention.join(', ');
                const treatment = condition.treatment;

                // Display condition information - Mostrar información
                resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
                resultDiv.innerHTML += `<img src="${condition.imagesrc}" alt="${condition.name}" onerror="this.style.display='none'">`;

                resultDiv.innerHTML += `<p><strong>Symptoms:</strong> ${symptoms}</p>`;
                resultDiv.innerHTML += `<p><strong>Prevention:</strong> ${prevention}</p>`;
                resultDiv.innerHTML += `<p><strong>Treatment:</strong> ${treatment}</p>`;
            } else {
                resultDiv.innerHTML = 'Condition not found.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
}
/**
 * @event click
 * @description Event listener para buscar condiciones de salud
 */
btnSearch.addEventListener('click', searchCondition);