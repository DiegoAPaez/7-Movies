# 📚 Sprint 7 | Movies

<a href='https://7-movies-eight.vercel.app/' targer=blank>🚀 CLICK HERE TO VISIT DEPLOYMENT</a>

## 🎯 Main Goals

-   Creating a Login, Logout and Registration.
-   Work on the connection with an Api.

## 📍 Project Status

✅ The project currently allows users to view a list of popular movies, access detailed information including cast lists, and view details about each person, including the movies they have participated in.

❗ Some links in the Header and Footer components were included only for styling purposes and won't redirect to a specific section. Further improvements to the project might add features and functionality to these anchors.

🛂 Login or registration process **_is required_** to access movies/persons sections.

📆 **_Pending:_** Add component test cases.

## 🛠️ Getting Started

### 1️⃣ Clone this repository

```bash
git clone https://github.com/DiegoAPaez/7-Movies.git
cd 7-Movies
```

### 2️⃣ Install Dependencies

Make sure you have Node.js installed. Then install the packages:

```bash
npm install
```

### 3️⃣ Install environment variables

To run project locally environment variables **must** be configured.

-   Firebase Authentication
-   TheMovieDB

### 4️⃣ Start the Development Server

```bash
npm run dev
```

## 📁 Folder Structure

```
📂 src/
 ┣ 📂 auth/
 ┃ ┣ 📂 components/      # Login, Register forms, ProtectedRoute
 ┃ ┣ 📂 config/          # Firebase auth functions (doSignIn, etc.)
 ┃ ┣ 📂 pages/           # Login and Register pages
 ┃ ┗ 📂 query/           # TanStack Query hooks for auth
 ┣ 📂 data/
 ┃ ┣ 📂 Movies/          # API calls for movies
 ┃ ┗ 📂 Persons/         # API calls for people/actors
 ┣ 📂 hooks/             # Custom React hooks (useForm, useMovies)
 ┣ 📂 presentation/
 ┃ ┣ 📂 components/      # Reusable UI components (Header, MovieCard, etc.)
 ┃ ┗ 📂 pages/           # Top-level page components (HomePage, MoviesPage, etc.)
 ┣ 📂 routes/            # Routing configuration (AppRouter)
 ┣ 📂 utils/             # Utility types and functions
 ┣ 📂 firebase/          # Firebase configuration
 ┣ 📄 App.tsx            # Root React component
 ┗ 📄 main.tsx           # Application entry point
📄 .env.local            # Environment variables
📄 index.html
```

## 💻 Technologies Used

![HTML Icon](https://skillicons.dev/icons?i=html "HTML Icon")
![CSS Icon](https://skillicons.dev/icons?i=css "CSS Icon")
![Tailwind Icon](https://skillicons.dev/icons?i=tailwind "Tailwind Icon")
![Typescript Icon](https://skillicons.dev/icons?i=typescript "Typescript Icon")
![React Icon](https://skillicons.dev/icons?i=react "React Icon")
![Vite Icon](https://skillicons.dev/icons?i=vite "Vite Icon")
![Node Icon](https://skillicons.dev/icons?i=nodejs "Node Icon")
![FIrebase Icon](https://skillicons.dev/icons?i=firebase "Firebase Icon")

## 🤝 Contributions

Contributions are welcome. Please open an issue or a pull request to submit changes.

## ⏳ Project Status

![Static Badge](https://img.shields.io/badge/Completed-Completed?style=flat-square&label=Status) ![Static Badge](https://img.shields.io/badge/Pending-Revision?style=flat-square&label=Revision&color=yellow)
