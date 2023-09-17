Blu Lab Landing Page 

Welcome to the documentation for my React-based landing page project. This landing page is designed to showcase various sections of a website, including a navigation bar, home section, about us section, services section, products section, and contact section. Additionally, it features a dark mode toggle for enhanced user experience.
Table of Contents

    Project Structure
    Getting Started
    Usage
    Components
    Customization
    

Project Structure

The project structure is organized as follows:



Blu-lab/
├── src/
    ├── Hooks/
│   │   ├── Navbar.js
│   │   └──useDarkside.js
│   ├── assets/
│   │   ├── Hero.svg
│   │   
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Home.js
│   │   ├── AboutUs.js
│   │   ├── Services.js
│   │   ├── Products.js
│   │   ├── Contact.js
│   │   └── DarkModeToggle.js
│   ├── App.js
│   ├── index.js
│   ├── styles.css
│   └── ...
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── ...
├── package.json
├── README.md
└── ...

    src/: Contains React components and application logic.
    public/: Contains public assets and HTML files.
    package.json: Project dependencies and scripts configuration.
    README.md: Documentation for the project.

Getting Started

To run this project locally, follow these steps:

    Clone the repository to your local machine:

    bash

git clone https://github.com/Teklit27/Blu-lab.git

Navigate to the project directory:

bash

cd Blu-lab

Install project dependencies:

bash

npm install

Start the development server:

bash

    npm start

    Open your web browser and visit http://localhost:3000 to view the landing page.

Usage

The landing page features multiple sections, including a navigation bar, home, about us, services, products, and contact. You can customize the content of these sections according to your requirements.

most importantlly it uses React-Spring for animation on navigation and on scroll.

Components

    Navbar.js: The navigation bar component with a dark mode toggle button.
    DarkModeToggle.js: The dark mode toggle button component.
    Home.js, AboutUs.js, Services.js, Products.js, Contact.js: Components for different sections of the landing page.
    App.js: Sets up routing and renders the components.

Customization

You can customize the content, styles, and functionality of each section by editing the respective components in the src/components directory. Additionally, you can modify the dark mode functionality in Navbar.js and DarkModeToggle.js to suit your design preferences.