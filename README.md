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

### 3. Dynamic Report Generation
- Generating and displaying reports dynamically within a web page
- Updating HTML content based on processed data
- Presenting statistical information in an organized and understandable manner
- Manipulating the DOM to reflect changes instantly

### 4. User Interaction and Event Handling
- Practicing event-driven programming and user interaction
- Learning to handle user-triggered events (button clicks and navigation links)
- Responding with appropriate search queries

## Prerequisites

- Basic knowledge of HTML and GitHub
- Basic understanding of arrays, array methods, strings, objects, and functions
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
├── public/
│   ├── index.html            # Main page with form
│   ├── health_contact.html   # Contact page
│   └── health_analysis.json  # Health conditions data
├── scripts/
│   └── health_analysis.js    # Application logic
├── styles/                   # CSS stylesheets directory
└── assets/                   # Additional resources (images, etc.)
```

## Installation and Usage

1. Clone the repository
2. Open `index.html` in your web browser
3. Fill out the form with patient data
4. Use the search and report generation functions

## Technologies Used

- HTML5
- CSS3
- JavaScript
- JSON (for health data storage)
- DOM Manipulation

## Contributions

This is an educational project. Suggestions and improvements are welcome through issues and pull requests.

## License

This project is for educational purposes as part of the IBM Full-Stack JavaScript Developer course on Coursera.