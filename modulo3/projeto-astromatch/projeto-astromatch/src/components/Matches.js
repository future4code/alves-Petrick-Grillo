import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const MainConteiner = styled.div`
    `
function Matches(props) {
    const [matcheList, setMatcheList] = useState([])

    useEffect(() => {
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/Petrick/matches")
            .then((res) => {
                setMatcheList(res.data.matches)
                console.log(res.data.matches)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])
    console.log("teste",matcheList)
    const Matches = matcheList.map(pessoa => {
        return (
          <option key={pessoa.name} value={pessoa.name}>
            {pessoa.name}, {pessoa.age}
            <img src={pessoa.photo}>
            </img>
          </option>
        );
    });
    return (
        <MainConteiner>
            <button onClick={props.tela1}>Ver Perfis</button>
                {Matches}
        </MainConteiner>
    );
}

export default Matches;