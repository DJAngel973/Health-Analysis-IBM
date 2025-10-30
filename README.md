# Health Census Application

This is a practical IBM exercise to develop a simple Health Census application.

## Project Description

In this health data analysis interface, we explore building interactive forms using HTML and employing JavaScript to collect and manage patient data.

This exercise helps understand DOM manipulation, search techniques based on health conditions, as well as dynamic report generation within a web page, displaying statistical information derived from the data.

## Learning Objectives

### 1. Interactive Data Entry Interface
- Understanding front-end web development by creating an interactive interface to collect patient data
- Using HTML forms and input elements
- Validating user input
- Handling various types of data input (text, radio buttons, numeric inputs, and dropdown menus)

### 2. Data Processing and Analysis
- Learning data management and search techniques using JavaScript
- Exploring data manipulation concepts such as storing data in object arrays
- Filtering data based on specific conditions
- Implementing search functionality with Fetch API

### 3. Dynamic Report Generation
- Generating and displaying reports dynamically within a web page
- Updating HTML content based on processed data
- Presenting statistical information in an organized and understandable manner
- Manipulating the DOM to reflect changes instantly

### 4. User Interaction and Event Handling
- Practicing event-driven programming and user interaction
- Learning to handle user-triggered events (button clicks and navigation links)
- Responding with appropriate search queries
- Implementing form submission and validation

## Prerequisites

- Basic knowledge of HTML and GitHub
- Basic understanding of arrays, array methods, strings, objects, and functions
- Understanding of Fetch API and JSON data handling
- Web browser with console (Chrome DevTools, Firefox Console, etc.)

## Project Setup

### .gitignore File

A comprehensive `.gitignore` file is included, designed with a **security and best practices approach** for web development projects. This file is structured to:

#### Key Features:
- **Sensitive data protection**: Ignores configuration files with API keys, secrets, and certificates
- **Cross-platform compatibility**: Covers temporary files for Windows, macOS, and Linux
- **Multi-tool support**: Includes rules for different IDEs, package managers, and frameworks
- **Category organization**: Clear structure divided into sections like dependencies, build, testing, etc.
- **Scalability ready**: Prepared for projects that may grow and incorporate more technologies

#### Security approach:
- Prevents accidental exposure of credentials and API keys
- Protects sensitive configuration files
- Excludes certificates and authentication files

This approach ensures the project maintains security best practices from the start, being suitable for both academic exercises and real production projects.

## Project Structure

```
healthAnalysis/
├── README.md
├── .gitignore
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── index.html              # Main page with patient form and search
├── health_contact.html     # Contact page with inquiry form
├── health_analysis.json    # Health conditions database
├── scripts/
│   └── health_analysis.js      # Main application logic with JSDoc
├── styles/
│   └── health_analysis.css     # Documented stylesheet
└── assets/
    └── images/                 # Health condition images
        ├── Tiroides.jpg
        ├── Diabetes.jpg
        └── Presión Arterial Alta.jpg
```

## Installation and Usage

1. Clone the repository
2. Open `index.html` in your web browser
3. Fill out the patient form with the required data
4. Use the search functionality to look up health conditions
5. Generate reports to view patient statistics
6. Access the contact page through `health_contact.html`

## Technologies Used

- **HTML5**: Semantic markup and form validation
- **CSS3**: Responsive styling with flexbox layout
- **JavaScript ES6+**: DOM manipulation, event handling, and data processing
- **Fetch API**: Asynchronous data retrieval from JSON
- **JSON**: Structured health conditions database

## Features

### Main Application (index.html)
- **Patient Registration**: Form to add patients with gender, age, and medical condition
- **Health Condition Search**: Real-time search with detailed condition information
- **Statistical Reports**: Dynamic generation of patient demographics and condition statistics
- **Responsive Design**: Mobile-friendly interface

### Contact Page (health_contact.html)
- **Contact Form**: User inquiry form with validation
- **Responsive Layout**: Consistent styling with main application
- **Form Submission**: Basic confirmation functionality

### Data Management
- **JSON Database**: Structured health conditions with symptoms, prevention, and treatment
- **Search Integration**: Case-insensitive condition lookup
- **Image Support**: Visual representation of health conditions

## Code Documentation

### JavaScript (JSDoc)
The main JavaScript file is fully documented with JSDoc comments including:
- Function descriptions and parameters
- Return types and error handling
- Usage examples and type definitions
- Event listeners and DOM manipulation

### HTML Documentation
Both HTML files include comprehensive documentation:
- Component-level documentation
- Element purpose and functionality
- Dependencies and relationships
- Form field specifications

### CSS Documentation
The stylesheet includes detailed documentation:
- Section organization and purpose
- Component-specific styling
- Color scheme and typography
- Responsive design considerations

## Data Structure Documentation

### health_analysis.json

**Purpose**: Base de datos estática de condiciones de salud para funcionalidad de búsqueda
**Location**: [`public/health_analysis.json`](public/health_analysis.json)
**Usage**: Consumido por la función `searchCondition()` en [`scripts/health_analysis.js`](scripts/health_analysis.js)

#### Structure:
```json
{
  "conditions": [
    {
      "name": "string",           // Nombre de la condición (usado para búsqueda)
      "imagesrc": "string",       // Ruta relativa a la imagen (/assets/images/...)
      "symptoms": ["string"],     // Array de síntomas
      "prevention": ["string"],   // Array de métodos de prevención
      "treatment": "string"       // Descripción del tratamiento
    }
  ]
}
```

#### Current Conditions:
- **Tiroides**: Condiciones relacionadas con la tiroides
- **Diabetes**: Diabetes mellitus
- **Presión Arterial Alta**: Hipertensión arterial

#### Notes:
- La búsqueda es **case-insensitive** (no distingue mayúsculas/minúsculas)
- Las imágenes deben existir en el directorio [`assets/images/`](assets/images/)
- Para agregar nuevas condiciones, seguir la estructura exacta del JSON

### health_contact.html

**Purpose**: Página de contacto para consultas sobre condiciones de salud
**Location**: [`public/health_contact.html`](public/health_contact.html)
**Features**: Formulario de contacto con validación HTML5

#### Components:
- **Navigation Bar**: Enlaces de navegación consistentes con la página principal
- **Contact Form**: Formulario para consultas de usuarios
- **Thank You Function**: Confirmación básica de envío

#### Form Fields:
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| name | text | Yes | Nombre completo del usuario |
| email | email | Yes | Dirección de correo electrónico |
| condition | text | Yes | Condición de salud sobre la que consulta |
| message | textarea | Yes | Mensaje detallado |

#### Styling:
- **External CSS**: Usa [`styles/health_analysis.css`](styles/health_analysis.css) para estilos base
- **Inline CSS**: Estilos específicos del formulario de contacto
- **Responsive**: Formulario centrado con ancho máximo de 400px

#### Current Limitations:
- ⚠️ **No backend integration**: Form doesn't actually send data
- ⚠️ **Basic validation**: Only HTML5 required attributes
- ⚠️ **Simple feedback**: Uses browser alert for confirmation


## File Descriptions

- **[`public/index.html`](public/index.html)**: Main application interface with patient data entry form and search functionality
- **[`public/health_contact.html`](public/health_contact.html)**: Contact information page with inquiry form
- **[`public/health_analysis.json`](public/health_analysis.json)**: Contains structured data about health conditions, symptoms, prevention, and treatments
- **[`scripts/health_analysis.js`](scripts/health_analysis.js)**: Core JavaScript logic for data processing, analysis, DOM manipulation, and search functionality
- **[`styles/health_analysis.css`](styles/health_analysis.css)**: Main stylesheet with documented component styles and responsive design
- **[`assets/images/`](assets/images/)**: Directory for health condition images used in search results

## Development Best Practices

### Code Quality
- **Comprehensive Documentation**: All files include detailed comments and documentation
- **Consistent Naming**: Clear, descriptive variable and function names
- **Error Handling**: Proper error management for fetch operations and user input
- **Responsive Design**: Mobile-first approach with flexible layouts


## License

This project is for educational purposes as part of the IBM Full-Stack JavaScript Developer course on Coursera.

---

**Note**: This application is designed for educational purposes and should not be used for actual medical advice or diagnosis.