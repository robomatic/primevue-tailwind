/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./presets/**/*.{js,vue,ts}', './components/**/*.{js,vue,ts}', './doc/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}', './app.vue', './error.vue'],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: 'rgb(var(--primary-500))',
                    0: 'rgb(var(--primary-0))',
                    50: 'rgb(var(--primary-50))',
                    100: 'rgb(var(--primary-100))',
                    200: 'rgb(var(--primary-200))',
                    300: 'rgb(var(--primary-300))',
                    400: 'rgb(var(--primary-400))',
                    500: 'rgb(var(--primary-500))',
                    600: 'rgb(var(--primary-600))',
                    700: 'rgb(var(--primary-700))',
                    800: 'rgb(var(--primary-800))',
                    900: 'rgb(var(--primary-900))',
                    950: 'rgb(var(--primary-950))'
                },
                secondary: {
                    DEFAULT: 'rgb(var(--secondary-500))',
                    0: 'rgb(var(--secondary-0))',
                    50: 'rgb(var(--secondary-50))',
                    100: 'rgb(var(--secondary-100))',
                    200: 'rgb(var(--secondary-200))',
                    300: 'rgb(var(--secondary-300))',
                    400: 'rgb(var(--secondary-400))',
                    500: 'rgb(var(--secondary-500))',
                    600: 'rgb(var(--secondary-600))',
                    700: 'rgb(var(--secondary-700))',
                    800: 'rgb(var(--secondary-800))',
                    900: 'rgb(var(--secondary-900))',
                    950: 'rgb(var(--secondary-950))'
                },
                surface: {
                    DEFAULT: 'rgb(var(--surface-500))',
                    0: 'rgb(var(--surface-0))',
                    50: 'rgb(var(--surface-50))',
                    100: 'rgb(var(--surface-100))',
                    200: 'rgb(var(--surface-200))',
                    300: 'rgb(var(--surface-300))',
                    400: 'rgb(var(--surface-400))',
                    500: 'rgb(var(--surface-500))',
                    600: 'rgb(var(--surface-600))',
                    700: 'rgb(var(--surface-700))',
                    800: 'rgb(var(--surface-800))',
                    900: 'rgb(var(--surface-900))',
                    950: 'rgb(var(--surface-950))'
                },
                success: {
                    DEFAULT: 'rgb(var(--success-500))',
                    0: 'rgb(var(--success-0))',
                    50: 'rgb(var(--success-50))',
                    100: 'rgb(var(--success-100))',
                    200: 'rgb(var(--success-200))',
                    300: 'rgb(var(--success-300))',
                    400: 'rgb(var(--success-400))',
                    500: 'rgb(var(--success-500))',
                    600: 'rgb(var(--success-600))',
                    700: 'rgb(var(--success-700))',
                    800: 'rgb(var(--success-800))',
                    900: 'rgb(var(--success-900))',
                    950: 'rgb(var(--success-950))'
                },
                info: {
                    DEFAULT: 'rgb(var(--info-500))',
                    0: 'rgb(var(--info-0))',
                    50: 'rgb(var(--info-50))',
                    100: 'rgb(var(--info-100))',
                    200: 'rgb(var(--info-200))',
                    300: 'rgb(var(--info-300))',
                    400: 'rgb(var(--info-400))',
                    500: 'rgb(var(--info-500))',
                    600: 'rgb(var(--info-600))',
                    700: 'rgb(var(--info-700))',
                    800: 'rgb(var(--info-800))',
                    900: 'rgb(var(--info-900))',
                    950: 'rgb(var(--info-950))'
                },
                warning: {
                    DEFAULT: 'rgb(var(--warning-500))',
                    0: 'rgb(var(--warning-0))',
                    50: 'rgb(var(--warning-50))',
                    100: 'rgb(var(--warning-100))',
                    200: 'rgb(var(--warning-200))',
                    300: 'rgb(var(--warning-300))',
                    400: 'rgb(var(--warning-400))',
                    500: 'rgb(var(--warning-500))',
                    600: 'rgb(var(--warning-600))',
                    700: 'rgb(var(--warning-700))',
                    800: 'rgb(var(--warning-800))',
                    900: 'rgb(var(--warning-900))',
                    950: 'rgb(var(--warning-950))'
                },
                help: {
                    DEFAULT: 'rgb(var(--help-500))',
                    0: 'rgb(var(--help-0))',
                    50: 'rgb(var(--help-50))',
                    100: 'rgb(var(--help-100))',
                    200: 'rgb(var(--help-200))',
                    300: 'rgb(var(--help-300))',
                    400: 'rgb(var(--help-400))',
                    500: 'rgb(var(--help-500))',
                    600: 'rgb(var(--help-600))',
                    700: 'rgb(var(--help-700))',
                    800: 'rgb(var(--help-800))',
                    900: 'rgb(var(--help-900))',
                    950: 'rgb(var(--help-950))'
                },
                danger: {
                    DEFAULT: 'rgb(var(--danger-500))',
                    0: 'rgb(var(--danger-0))',
                    50: 'rgb(var(--danger-50))',
                    100: 'rgb(var(--danger-100))',
                    200: 'rgb(var(--danger-200))',
                    300: 'rgb(var(--danger-300))',
                    400: 'rgb(var(--danger-400))',
                    500: 'rgb(var(--danger-500))',
                    600: 'rgb(var(--danger-600))',
                    700: 'rgb(var(--danger-700))',
                    800: 'rgb(var(--danger-800))',
                    900: 'rgb(var(--danger-900))',
                    950: 'rgb(var(--danger-950))'
                }
            },
            animation: {
                'fade-in': 'fadein 250ms linear'
            },
            keyframes: {
                fadein: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 }
                },
            }
        }
    },
    plugins: []
};
