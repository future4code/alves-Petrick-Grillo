import { useEffect, useState } from "react";
import axios from "axios";

const useRequestData = (initialData, url, refresh) => {
    const [data, setData] = useState(initialData)
    const [loading, setLoading] = useState(false);
    const [erro, setErro] = useState();

    const getPosts = () => {
        axios.get(url, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((resposta) => {
            setData(resposta.data)
            setLoading(false);
        }).catch((erro) => {
            console.log(erro)
            setLoading(false);
            setErro(erro.response.data);
        })
    }
    useEffect(() => {
        getPosts()
    }, [url, refresh])

    return (data)
}

export default useRequestData
