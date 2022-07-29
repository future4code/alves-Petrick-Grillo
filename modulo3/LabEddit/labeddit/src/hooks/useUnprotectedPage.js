import React, { useEffect, useState, useLayoutEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const useUnprotectedPage = () => {
    const navigate = useNavigate()
    useLayoutEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            navigate("/ListaPost")
        }
    }, [])
}
export default useUnprotectedPage