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
            sm: '500px',
            md: '800px',
            lg: '900px',
            xl: '1440px',
        },
        extend: {
            colors: {
                mainPink: '#eb8d91',
                mainGray: '#EEEBEB',
                fontMainBrown: '#473133',
                informationBg: '#F4F4F4',
                informationText: '#858585',
            },
            fontFamily: {
                sawarabi: ['Sawarabi Gothic'],
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
