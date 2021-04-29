export function esMobile() {
    return window.matchMedia('(max-width: 720px)').matches;
}
export function esTablet() {
    return window.matchMedia('(min-width: 721px) and (max-width: 999px)').matches;
}
export function esDesktop() {
    return window.matchMedia('(min-width: 1000px)').matches;
}
