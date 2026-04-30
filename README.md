# Todo App - Frontend Mentor Challenge

This is a solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW).

I built this project as part of my learning journey during the **"Dev em dobro"** online course

## Table of contents
- [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Acknowledgments](#acknowledgments)

### The challenge

Users should be able to:
- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode

## My process

### Built with

- **React 19** - UI Library
- **Vite** - Frontend Tooling
- **TypeScript** - For type safety and better developer experience
- **Tailwind CSS v4** - For utility-first styling
- **Custom Hooks** - Extracted logic into a `useTodo` hook for a cleaner component structure
- **Context API** - Managed the Light/Dark theme globally using `ThemeProvider`
- Mobile-first workflow
- Clean and semantic file structure

### What I learned

- **Separation of Concerns:** I learned how to move my state management and business logic out of my components and into a custom hook (`useTodo.ts`). It makes the main `App.tsx` file look clean and focused purely on the UI. I can definitely see how structuring everything cleanly makes maintenance extremely easy.
- **TypeScript in React:** I am still getting the hang of it, but defining interfaces for my Todo items and component props (like `TodoListProps`) made catching errors so much easier.
- **Dynamic Theming:** Implementing a light/dark mode switch using React Context and Tailwind CSS template literals was more straightforward than i though.