# Project Name: Talent Manager 🧑‍💻

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Directory Structure](#directory-structure)
- [Business Case](#business-case)
- [Prototyping](#prototyping)
- [Contributing](#contributing)
- [License](#license)

## Description
This project is a user management web application built using React and TypeScript. It features login functionality, a home view, and a user management view. The application leverages React Router for navigation, Redux for state management, and follows best practices with Prettier for code formatting and ESLint for linting. Modular CSS is used for styling components.

## Features
- **Login**: Secure login functionality for users.
- **Dashboard**: A section for displaying general information and managing users.
- **User Management**: 
  - **Administrators**: Create, edit, and delete user accounts.
  - **Regular Users**: View their information and update some of their info and password.

## Technologies Used
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **React**: A JavaScript library for building user interfaces.
- **React Router**: A library for routing in React applications.
- **ESLint**: A tool for identifying and reporting on patterns in JavaScript.
- **Modular CSS**: A CSS file in which all class and animation names are scoped locally by default.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/alkemyTech/CENCO-MIT-Front-T2.git
   cd CENCO-MIT-Front-T2
   ```
2. Install the dependencies:
   ```bash
   pnpm install # or npm install
   ```
3. Create an environment variables (.env) file with the following variables:
   ```env
   VITE_BACKEND_URL=http://localhost:3000
   VITE_LOGIN_URL=auth/login
   VITE_DASHBOARD_ADMIN_URL=users
   ```   
5. Start the application:
   ```bash
   pnpm run dev # or npm run dev
   ```
## Usage
Once the application is running, you can access it at `http://localhost:5173`. The main views include:
- **Login**: Accessible at `/login`
- **Home**: Accessible at `/home` when authorized
- **User Management**: Accessible at `/users` when authorized

## Directory Structure
```arduino
CENCO-MIT-Front-T2/
├── public/
├── src/
│   ├── assets/
│   │   └── imag/
│   ├── components/
│   │   ├── globals/
│   │   └── layout/
│   ├── constants/
│   ├── hooks/
│   ├── interfaces/
│   ├── pages/
│   │   ├── Dashboard/
│   │   ├── ErrorPage/
│   │   ├── Login/
│   │   └── NotFoundPage/
│   ├── routes/
│   ├── services/
│   ├── validations/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .eslintrc.js
├── package.json
├── tsconfig.json
└── vite.config.ts

```
## Business Case

[Business Case Documentation](business-case-doc.md)

## Prototyping

### Wireframe

[Figma File](https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FmbtqNXlzHirdr2G2JJjt27%2FWireframe%3Fnode-id%3D2-2%26t%3DcLc3Qb2kxMgmFHiw-1%26scaling%3Dmin-zoom%26content-scaling%3Dfixed%26page-id%3D0%253A1)

![Desktop Admin View 1](https://raw.githubusercontent.com/alkemyTech/CENCO-MIT-Back-T2/main/src/assets/img/desktop-admin1.png)
![Desktop Admin View 2](https://raw.githubusercontent.com/alkemyTech/CENCO-MIT-Back-T2/main/src/assets/img/desktop-admin2.png)
![Desktop User View 1](https://raw.githubusercontent.com/alkemyTech/CENCO-MIT-Back-T2/main/src/assets/img/desktop-user1.png)
![Desktop User View 2](https://raw.githubusercontent.com/alkemyTech/CENCO-MIT-Back-T2/main/src/assets/img/desktop-user2.png)
![Mobile Admin View](https://raw.githubusercontent.com/alkemyTech/CENCO-MIT-Back-T2/main/src/assets/img/mobile-admin.png)
![Mobile User View](https://raw.githubusercontent.com/alkemyTech/CENCO-MIT-Back-T2/main/src/assets/img/mobile-user.png)

## Contributing
We welcome contributions from the community. Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Create a new Pull Request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
