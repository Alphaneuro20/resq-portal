# 🚨 ResQ Portal: Offline Emergency Response PWA

[![Live Demo](https://img.shields.io/badge/demo-Live%20Portal-red)](#) *(Link your GitHub Pages URL here once live)*

## 📖 Project Overview
The **ResQ Portal** is an offline-first Progressive Web Application (PWA) engineered to provide immediate, life-saving medical guidance and SOS utilities during critical emergencies. Designed with a focus on accessibility and high-stress usability, the application functions entirely without an internet connection once installed, ensuring users always have access to critical response protocols.

This project was developed collaboratively as part of our **Web Technology & Vulnerability** coursework to demonstrate modern web capabilities, client-side storage, and secure offline caching.

## ✨ Key Features
* **📡 Zero-Dependency Offline Mode:** Utilizes Service Workers to cache HTML, CSS, JavaScript, and image assets, allowing the app to open instantly without a network connection.
* **📍 One-Click GPS SOS:** Integrates the Web Geolocation API and Web Share API to fetch real-time coordinates and automatically format an emergency SMS for the user's primary contact.
* **💾 Secure Client-Side Storage:** Uses the browser's `LocalStorage` API to safely retain the user's Medical ID and primary emergency contact numbers without requiring a backend database.
* **🌐 Multilingual Support:** Dynamic, on-the-fly language switching between English, Hindi, and Marathi via JavaScript DOM manipulation.
* **🔊 Audio Beacons & Accessibility:** Features native Text-to-Speech (TTS) for reading medical guides aloud, alongside Web Audio API integration for high-frequency SOS sirens and whistles.
* **📞 Native Communication Protocols:** Direct integration with mobile dialers and SMS apps using `tel:` and `sms:` URL schemes.

## 🛠️ Technical Stack
* **Frontend UI/UX:** HTML5, CSS3 (Custom Properties for Light/Dark/Sepia themes)
* **Logic & DOM Manipulation:** Vanilla JavaScript (ES6+)
* **PWA Architecture:** Web App Manifest (`manifest.json`), Service Workers (`sw.js`), Cache Storage API
* **Web APIs Leveraged:** Geolocation API, Web Speech API, Web Audio API

## 🚀 How to Run Locally
To test this application on your local machine:
1. Clone this repository: `git clone https://github.com/yourusername/resq-portal.git`
2. Open the project folder in your preferred code editor (e.g., VS Code).
3. Start a local development server (e.g., using the "Live Server" extension in VS Code or running `python -m http.server 8000` in your terminal).
4. Navigate to `http://localhost:8000` in your web browser.

## 👥 Development Team & Methodology
This project was developed using an **AI-Assisted Development workflow**. Rather than manually writing every line of code, our team focused on the high-level architecture, prompt engineering, and iterative refinement. 

* **Aseem & Nirmaan** - *Project Architects & Prompt Engineers*
  * Conceptualized the offline-first SOS and medical guide functionality.
  * Leveraged AI coding assistants to rapidly prototype the PWA structure, Service Workers, and UI.
  * Provided critical insights, logical direction, and rigorous testing to shape the AI outputs into a fully functional, production-ready application.
