import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const useProtectedPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
      const token = localStorage.getItem("token")
      if (token === null) {
        navigate("/Login")
      }
    }, [])
  }
  export default useProtectedPage