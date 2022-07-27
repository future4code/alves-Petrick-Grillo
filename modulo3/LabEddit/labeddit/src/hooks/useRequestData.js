import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (initialData, url, refresh) => {
    const [data, setData] = useState(initialData)

    useEffect(() => {
        axios.get(url, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((resposta) => {
            setData(resposta.data)
        }).catch((erro) => {
            console.log(erro)

        })
    }, [url, refresh])

    return (data)
}

export default useRequestData
