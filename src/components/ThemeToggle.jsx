import React from 'react';
const KEY = 'prefers-dark';

export default function ThemeToggle() {
  const [dark, setDark] = React.useState(() => localStorage.getItem(KEY) === 'true');

  React.useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    localStorage.setItem(KEY, dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(d => !d)}
      className="relative w-14 h-7 rounded-full p-1 flex items-center transition-colors duration-300
                 bg-gradient-to-r from-yellow-300 to-yellow-500 dark:from-gray-700 dark:to-gray-900"
      aria-label="Toggle Dark Mode"
    >
      <div
        className={`absolute w-6 h-6 rounded-full bg-white dark:bg-gray-800 shadow-md transform transition-transform duration-300 ${
          dark ? 'translate-x-7' : 'translate-x-0'
        } flex items-center justify-center text-sm`}
      >
        {dark ? '🌙' : '☀️'}
      </div>
    </button>
  );
}
