/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    darkMode: false,
    content: [
        './src/**/*.{html,ts,css,scss,sass,less,styl}',
    ],
    theme: {
        extend: {
            opacity: ['disabled'],
            colors: {
                primary: {"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"},
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms")({
            strategy: 'class', // only generate classes
        }),
    ],
}
