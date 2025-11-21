# 📝 Todo App — Next.js

A highly responsive, modern Todo application built with **Next.js**, **TypeScript**, and **Zustand** for state management.  
This project provides a clean UI, smooth interactions, and a scalable architecture suitable for personal task tracking or enterprise-level workflow systems.

---

## 🚀 Features

### ✅ Core Features

- Create, read, update, and delete tasks
- Task status management (e.g., _todo_, _in-progress_, _completed_)
- Task priority levels
- Assign multiple users to a task
- Date management (start & end dates)
- Full client-side state management with Zustand
- Persisted state (optional)

---

## 🛠️ Tech Stack

| Layer            | Tools                          |
| ---------------- | ------------------------------ |
| Framework        | **Next.js 16 / App Router**    |
| Language         | **TypeScript**                 |
| State Management | **Zustand**                    |
| UI Components    | **Chakra UI**                  |
| Styling          | **TailwindCSS**                |
| Icons            | **Iconsax Icons**              |
| Toasts           | **Sonner**                     |
| Form Handling    | Custom form logic + validation |

---

## 📂 Project Structure

```
/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── tasks/
│       └── components/
│           ├── TaskDialog.tsx
│           ├── TaskCard.tsx
│           └── TaskList.tsx
├── components/
│   ├── ui/ (chakra-ui/react)
│   └── shared/
├── store/
│   └── task.store.ts
├── lib/
│   └── utils.ts
├── public/
└── README.md
```

---

## 📦 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/joshhumphrey/kwaliteit.git
cd kwaliteit
```

### 2. Install dependencies

```bash
bun install
```

### 3. Run development server

```bash
bun run dev
```

### 4. Build for production

```bash
bun run build
```

---

## 🧩 State Management (Zustand)

State management follows a clean **action-based** pattern.

Example actions:

```ts
addTask();
updateTask();
deleteTask();
updateStatus();
openDialog();
closeDialog();
```

Zustand ensures:

- predictable state updates
- less boilerplate compared to Redux
- fast reactivity
- scalable store structure

---

## 🧪 Validation

All tasks include validation for:

- Name
- Priority
- Status
- Users assigned
- Start date & end date
- Description
- End date must be greater than or equal to start date

---

## 🎨 UI & UX

- Built with **ShadCN UI** (Radix-based components)
- Smooth transitions
- Accessible dialogs
- Keyboard and screen-reader friendly

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

---

## 💬 Author

Built with ❤️ by **Humphrey**.  
For inquiries or collaboration, feel free to reach out!
