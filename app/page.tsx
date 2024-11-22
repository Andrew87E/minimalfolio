"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  // Toggle theme
  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Dark Mode Toggle */}
      <div className="absolute top-4 right-4 animate-fadeIn">
        <button
          onClick={toggleDarkMode}
          className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md shadow"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center h-screen text-center space-y-4 bg-gray-100 dark:bg-gray-800 animate-fadeInScale">
        <h1 className="text-5xl font-bold">Andrew Edwards</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Full-Stack Developer | Software Engineer
        </p>
        <div className="flex space-x-4 mt-4">
          <a
            href="https://linkedin.com/in/andrew-edwards-software-engineer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://edwards.codes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 dark:text-gray-200 hover:underline"
          >
            Portfolio
          </a>
        </div>
      </header>

      {/* About Me Section */}
      <section
        id="about"
        className="py-16 px-8 max-w-3xl mx-auto text-center animate-fadeIn"
      >
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-600 dark:text-gray-400">
          I’m a Full-Stack Developer with expertise in React, Python, SQL, and
          C#. Passionate about crafting scalable and user-friendly applications,
          I bring a blend of technical skill and creative problem-solving to
          every project.
        </p>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-16 px-8 max-w-4xl mx-auto text-center bg-gray-50 dark:bg-gray-800 animate-fadeIn"
      >
        <h2 className="text-3xl font-semibold mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-4 animate-fadeInScale">
            React
          </div>
          <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-4 animate-fadeInScale">
            Python
          </div>
          <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-4 animate-fadeInScale">
            SQL
          </div>
          <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-4 animate-fadeInScale">
            C#
          </div>
          <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-4 animate-fadeInScale">
            TypeScript
          </div>
          <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-4 animate-fadeInScale">
            Tailwind CSS
          </div>
          <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-4 animate-fadeInScale">
            Node.js
          </div>
          <div className="bg-white dark:bg-gray-700 shadow rounded-lg p-4 animate-fadeInScale">
            Flutter
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-16 px-8 max-w-4xl mx-auto text-center animate-fadeIn"
      >
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>
        <div className="space-y-6">
          <div className="bg-gray-100 dark:bg-gray-800 shadow rounded-lg p-6">
            <h3 className="text-xl font-bold">Project One</h3>
            <p className="text-gray-600 dark:text-gray-400">
              A React-based dashboard to streamline warehouse operations.
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 shadow rounded-lg p-6">
            <h3 className="text-xl font-bold">Project Two</h3>
            <p className="text-gray-600 dark:text-gray-400">
              A SwiftUI iPad application to enhance order-picking efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 px-8 max-w-3xl mx-auto text-center bg-gray-50 dark:bg-gray-900 animate-fadeIn"
      >
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Feel free to reach out for collaboration or job opportunities!
        </p>
        <p className="mt-4">
          Email:{" "}
          <a
            href="mailto:andrew@edwards.codes"
            className="text-blue-500 underline"
          >
            andrew@edwards.codes
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-800 dark:bg-gray-900 text-center text-gray-400 dark:text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} Andrew Edwards. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
