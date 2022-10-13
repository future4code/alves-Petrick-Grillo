import { SelectSena } from "../../components/SelectSena"
import { DataSena } from "../../components/DataSena"
import { NumerosSena } from "../../components/NumerosSena"
import { BackGroundSena } from "../../components/BackGroundSena"

export function MegaSena() {
    return (
        <div>
            <SelectSena />
            <DataSena />
            <NumerosSena />
            <BackGroundSena />
            {/* <h1>MEGA SENA</h1> */}
        </div>
    )
}