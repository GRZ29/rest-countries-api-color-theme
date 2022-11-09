export const initialStateTheme = {
    isDark: window.localStorage.getItem(`isDark`)?
        JSON.parse(window.localStorage.getItem(`isDark`)): 
        true,
};