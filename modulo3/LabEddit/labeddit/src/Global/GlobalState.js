import React, { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import axios from "axios"

const GlobalState = (props) => {
    const token = localStorage.getItem("token")
    const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")
    const [post, setPost] = useState([])
    const [mode, setMode] = useState(true)
    const [colorTeste, setColor] = useState("white")

    useEffect(() => {
        const cores = mode ? "white" : "#27282c"
        setColor(mode ? "white" : "#27282c")
    }, [mode])

    const values = {
        rightButtonText,
        setRightButtonText,
        post,
        setPost,
        mode,
        colorTeste,
        setMode,
    }
    return (
        <GlobalContext.Provider value={values}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState