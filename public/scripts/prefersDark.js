const { matches } = window.matchMedia('(prefers-color-scheme: dark)')
let dark = matches
const lsDark = localStorage.darkMode

if (lsDark !== undefined) {
    dark = lsDark === 'true' ? true : false
}

if (dark === true) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}
