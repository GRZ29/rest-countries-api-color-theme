
const ReducerTheme =  (state,action) => {

    const Validate = (name,item)=>{
        window.localStorage.setItem(`${name}`,JSON.stringify(item))
        return JSON.parse(window.localStorage.getItem(`${name}`));
    }

    switch (action.type) {
        case 'isDark':  {
            return {
                ...state,
                isDark: Validate('isDark',!state.isDark),
            }
        }
        default:{
            return null;
        }
    }
};

export default ReducerTheme;