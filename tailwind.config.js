/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                darkCyan: '#3c8067',
                darkerCyan: '#1f4234',
                cream: '#f2ebe3',
                darkBlue: '#1c232b',
                grayishBlue: '#6c7289',
            },
            fontFamily: {
                fraunces: ['Fraunces', 'serif'],
                montserrat: ['Montserrat', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
