import FunctionsCountries from "../Functions/FunctionsCountries";

const ReducerCountries = (state, action) => {
  switch (action.type) {
    case "getAll": {
      return {
        ...state,
        allData: action.payload,
        data: action.payload,
        loading: false,
      };
    }
    case "searchName": {
      return {
        ...state,
        data:
          action.payload.length !== 0
            ? state.allData.filter(
                (a) => a.name.toLowerCase().indexOf(action.payload) !== -1
              )
            : state.allData,
      };
    }
    case "searchDrop": {
      return {
        ...state,
        data:
          action.payload === "All"
            ? state.allData
            : state.allData.filter(
                (a) => a.region.indexOf(action.payload) !== -1
              ),
      };
    }
    case "loadingTrue": {
      return {
        ...state,
        loading: true,
      };
    }
    case "loadingFalse": {
      console.log("entre");
      return {
        ...state,
        loading: false,
      };
    }
    case "setOptions": {
      return {
        ...state,
        options: state.allData.filter((obj, pos, arr) => {
          return arr.map((mapObj) => mapObj.region).indexOf(obj.region) === pos;
        }),
      };
    }
    default: {
      return null;
    }
  }
};

export default ReducerCountries;
