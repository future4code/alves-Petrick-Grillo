import React, { useState } from "react";
import GlobalContext from "./GlobalContext";
import axios from "axios"

const GlobalState = (props) => {
    const token = localStorage.getItem("token")
    const [rightButtonText, setRightButtonText] = useState(token ? "LOGOUT" : "LOGIN")

    const values = {
        rightButtonText,
        setRightButtonText,
    }
    return (
        <GlobalContext.Provider value={values}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState