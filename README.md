# TS-TodoApp 🚀

> A blazing fast, type-safe todo application built with React & Redux

[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Redux](https://img.shields.io/badge/Redux-Thunk-764ABC?logo=redux&logoColor=white)](https://redux.js.org/)
[![Vite](https://img.shields.io/badge/Vite-Build-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green)](#license)
[![GitHub](https://img.shields.io/badge/GitHub-Razo--1-181717?logo=github)](https://github.com/Razo-1/TS-TodoApp)

## 📸 Demo

<!-- Uncomment and add screenshot -->
<!-- ![TS-TodoApp Preview](./screenshot.png) -->

## ✨ Features

- ✅ **Create Tasks** — quickly add new todos
- ✏️ **Edit Tasks** — convenient editing via modal window
- 🗑️ **Delete Tasks** — simple list management
- ☑️ **Mark Complete** — track your progress
- 🔄 **Redux State Management** — predictable state handling
- 🌐 **API Integration** — seamless backend synchronization
- 📱 **Responsive Design** — works everywhere
- 🎨 **Modern UI** — clean and intuitive interface
- ⚡ **TypeScript** — full type safety for reliability

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 18+ | UI Library |
| **TypeScript** | 5.0+ | Type Safety |
| **Redux** | Thunk | State Management |
| **Vite** | Latest | Build Tool |
| **CSS3** | Latest | Styling |

## 📦 Installation

### Requirements
- Node.js 16+ 
- npm or yarn

### Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/Razo-1/TS-TodoApp.git
cd TS-TodoApp

# 2. Install dependencies
npm install
# or
yarn install

# 3. Start dev server
npm run dev
# or
yarn dev

# 4. Open http://localhost:5173
```

### Production Build

```bash
npm run build
npm run preview
```

## 🏗️ Architecture

The project follows the **Atomic Design** methodology for maximum scalability and component reusability.

### Atomic Structure

```
Atoms → Molecules → Organisms → Templates → Pages
```

- **Atoms** 🔹 — basic elements (Button, Input, Label)
- **Molecules** 🔶 — atom combinations (SearchBar, TaskItem)
- **Organisms** 🔵 — complex components (TaskList, TaskForm)
- **Templates** 🟩 — page structures (MainLayout)
- **Pages** 📄 — complete views (TodoPage)

## 📁 Project Structure

```
src/
├── components/
│   ├── atoms/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── Badge.tsx
│   │
│   ├── molecules/
│   │   ├── TaskItem.tsx
│   │   ├── SearchBar.tsx
│   │   └── FilterTabs.tsx
│   │
│   ├── organisms/
│   │   ├── TaskList.tsx
│   │   ├── TaskForm.tsx
│   │   └── TaskModal.tsx
│   │
│   ├── templates/
│   │   └── MainLayout.tsx
│   │
│   └── pages/
│       └── TodoPage.tsx
│
├── store/
│   ├── slices/
│   │   ├── tasksSlice.ts
│   │   └── uiSlice.ts
│   │
│   ├── actions/
│   │   └── taskActions.ts
│   │
│   └── store.ts
│
├── services/
│   └── api.ts
│
├── types/
│   └── index.ts
│
├── App.tsx
└── main.tsx
```

## 🚀 Usage Examples

### Creating a Task

```typescript
// Dispatch Redux action
dispatch(addTask({
  id: Date.now(),
  title: "Buy milk",
  completed: false,
  createdAt: new Date()
}));
```

### Editing via API

```typescript
// Sync with backend
await api.updateTask(taskId, { title: "New task title" });
dispatch(updateTask({ id: taskId, title: "New task title" }));
```

## 🔗 API Integration

The app integrates with a RESTful API for persisting tasks:

```typescript
// services/api.ts
const api = {
  getTasks: () => fetch('/api/tasks'),
  addTask: (task) => fetch('/api/tasks', { method: 'POST', body: JSON.stringify(task) }),
  updateTask: (id, data) => fetch(`/api/tasks/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  deleteTask: (id) => fetch(`/api/tasks/${id}`, { method: 'DELETE' })
};
```

## 📊 State Management

Redux Thunk handles asynchronous operations:

```typescript
// Async action
export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await api.getTasks();
  return response.json();
});
```


### Add New Component

1. Choose an atomic design level
2. Create file in corresponding folder
3. Follow existing TypeScript patterns

## 🧪 Testing

```bash
# Run tests
npm run test

# Coverage report
npm run test:coverage
```

## 📚 Documentation

- [React Documentation](https://react.dev)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)



### Guidelines

- Follow TypeScript strict mode
- Use the project's ESLint config
- Build components using Atomic Design principles
- Add tests for new features


## 💬 Questions & Discussions

Have questions? Open a [GitHub Issue](https://github.com/Razo-1/TS-TodoApp/issues)
