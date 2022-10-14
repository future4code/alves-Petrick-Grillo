import styled from "styled-components"
import { BackGroundSena } from "../../components/BackGroundSena"
import { DataSena } from "../../components/DataSena"
import { NumerosSena } from "../../components/NumerosSena"
import { SelectSena } from "../../components/SelectSena"

function TimeMania() {

    return (
        <div>
            <BackGroundSena>
                <SelectSena />
                <NumerosSena />
                <DataSena />
            </BackGroundSena>
        </div>
    )
}
export default TimeMania