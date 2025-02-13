/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            animation: {
                'fast-spin': 'spin 0.5s linear infinite'
            },
            colors: {
                amaranthPurple: '#a93f55',
                gunmetal: '#19323c',
                mintCream: '#f3f7f0',
                border: 'gray'
            },
            fontFamily: {
                caesarDressing: ['"Caesar Dressing"', 'serif'],
                medievalSharp: ['"MedievalSharp"', 'serif']
            },
        }
    },
    plugins: [],
};