/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            screens: {
                xs: '340px',
                '2xs': '390px',
            },
            colors: {
                'main-color': 'var(--main-color)',
                'main-color-90': 'var(--main-color-90)',
                'secondary-color': 'var(--secondary-color)',
            },
        },
    },
    plugins: [],
};
