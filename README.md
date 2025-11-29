# Rockets: Gamified Productivity Tracking (Frontend)

## Project Overview

**Rockets** is a simple web (or mobile) application designed to help users **track their daily habits** and stay motivated through **gamification**.

Inspired by the needs of students, the application allows users to transform regular tasks like studying, sleeping, or reading into streak challenges and rewards, encouraging consistency and the establishment of solid routines.

This repository contains the source code for the User Interface (Frontend) of the application, developed using [**React Vite**].

## Key Features (Based on Constraints)

The application aims to implement the following features to meet the project criteria:

* **Simple Habit Logging:** Users can log daily activities (Studies, Sleep, Exercise, Reading, etc.) with a clear and intuitive user interface.
* **Progress Tracking via Streaks:** Visualization of consecutive days of habit completion through a dashboard.
* **Basic Rewards:** Display of simple, easy-to-understand rewards based on achieving milestones.
* **Optional Reminders (Future):** Capability to integrate notifications to encourage daily logging.
* **Streak Simulator:** The demo allows logging entries for past days to quickly simulate streaks and visualize rewards.

## Technologies Used

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework/Lib** | [Example: React] | Main library for building the user interface. |
| **Language** | TypeScript (or JavaScript) | Ensures code robustness and scalability. |
| **Styling** | [Example: Tailwind CSS or SASS/CSS Modules] | For fast and responsive design. |
| **State Management**| [Example: Redux, Context API, or Zustand] | To manage global state and user data. |
| **API** | Fetch / Axios | To communicate with the NestJS Backend (see the `Rockets-hack25-api` repo). |
| **Local Storage** | LocalStorage / IndexDB | Used for simple data storage for the demonstration schema. |

## Local Setup (Installation and Launch)

Follow these steps to launch the frontend application on your local machine.

### Prerequisites

* [Node.js](https://nodejs.org/en/) (Recommended Version: v18+)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Step 1: Clone the Repository

```bash
git clone [https://github.com/MarekGromko/Rockets-hack25-frontend.git](https://github.com/MarekGromko/Rockets-hack25-frontend.git)
cd Rockets-hack25-frontend
```

### Step 2: Install Dependencies
```bash
npm install
# or
yarn install
```

### Step 3 : Envrionnment Configuration
Create an `.env` file in the project root (if applicable) and define the variable for the Backend URL.

### Step 4: Launch the Application
Start the development server:
```bash
npm start
# or
yarn start
```
The application should be accessible in your browser at: http://localhost:5173

**Note**: Ensure the Backend server (Rockets-hack25-api) is also running for data communication to function correctly.

## Links
Backend API (NestJS)	https://github.com/MarekGromko/Rockets-hack25-api.git


## Author
Marek Gromko and Karolann Mauger