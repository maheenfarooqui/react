# Password Generator

A password generator built to learn **React hooks** in depth.

**Live demo:** https://passwordgenerator-two-theta.vercel.app/

## About

I built this project to understand how React hooks really work.
Instead of only reading about them, I used each hook for a real job.

## Hooks used

| Hook | What I used it for |
| --- | --- |
| `useState` | Store length, options, and the password |
| `useCallback` | Remember the generator and copy functions |
| `useEffect` | Make a new password when a setting changes |
| `useRef` | Select the password text before copying |

## Features

- Password length from 8 to 100 characters
- Add numbers and symbols with checkboxes
- New password when any setting changes
- One-click copy to clipboard
- Responsive dark theme

## Mistake I made (and fixed)

I added `password` to my `useEffect` dependency array.
After that, the password kept changing again and again, without stopping.

**Why it happened:**
1. `useEffect` runs the generator
2. The generator sets a new password
3. The new password changes the dependency
4. So `useEffect` runs again, forever

**The fix:** depend on the function, not on the value it sets.

```js
useEffect(() => {
  passwordGenerator();
}, [passwordGenerator]);
```

`passwordGenerator` only changes when the length or the options change,
so the loop is gone.

## Built with

- React
- Vite
- Tailwind CSS

## Run it locally

```bash
git clone https://github.com/maheenfarooqui/react.git
cd "react/hooks in react"
npm install
npm run dev
```

## What I want to improve

- Use `crypto.getRandomValues` instead of `Math.random` for stronger passwords
- Show a "Copied!" message after clicking copy
- Add a password strength meter

## Author

**Maheen Farooqui**
GitHub: https://github.com/maheenfarooqui
