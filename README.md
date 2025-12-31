# People Management SPA – Angular

## Introduction
This is a Single Page Application (SPA) developed using **Angular 8** to manage a list of people.  
The application allows users to **view**, **add**, **edit**, and **delete** people records using REST APIs.

This project is created as part of an Angular 7/8 technical assignment.

---

## Features
- View list of all people
- Add a new person
- Edit existing person details
- Delete a person
- Angular Routing for navigation
- REST API integration using json-server
- Responsive and clean UI

---

## Technologies Used
- Angular 8
- TypeScript
- HTML5 & CSS3
- Angular Router
- json-server (Mock REST API)

---

## Application Views
1. **People List View** – Displays all people with Edit & Delete actions  
2. **Add Person View** – Form to add a new person  
3. **Edit Person View** – Update existing person details  

---

## REST API Endpoints
The following REST endpoints are used:

- `GET /people` – Fetch all people  
- `POST /people` – Add a new person  
- `PUT /people/:id` – Update person details  
- `DELETE /people/:id` – Delete a person  

---

## Project Setup

### Step 1: Install Dependencies

```bash
npm install


## Step 2: Start REST API Server


json-server --watch db.json --port 3000

### Step 3: Run Angular Application
```bash

ng serve

### Step 4: Open in Browser

http://localhost:4200

### Folder Structure (Simplified)
```bash

src/
 ├── app/
 │   ├── people-list/
 │   ├── add-person/
 │   ├── edit-person/
 │   ├── app-routing.module.ts
 │   └── app.module.ts
 ├── assets/
 └── styles.css

### Conclusion
This project demonstrates the use of Angular to build a simple and efficient Single Page Application with routing and REST API integration.