import GlobalContext from "./GlobalContext";
const GlobalState = (props) => {
    const values = {

    }
    return (
        <GlobalContext.Provider value={values}>
            {props.children}
        </GlobalContext.Provider>
    )
}
export default GlobalState