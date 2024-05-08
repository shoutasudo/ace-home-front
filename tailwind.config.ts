/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '900px',
            xl: '1440px',
        },
        extend: {
            colors: {
                mainPink: '#e896a1',
                mainGray: '#EEEBEB',
                fontMainBrown: '#473133',
                informationBg: '#F4F4F4',
                informationText: '#858585',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
