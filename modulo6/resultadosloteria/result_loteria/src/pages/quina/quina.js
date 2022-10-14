import { BackGroundSena } from "../../components/BackGroundSena"
import { DataSena } from "../../components/DataSena"
import { NumerosSena } from "../../components/NumerosSena"
import { SelectSena } from "../../components/SelectSena"

function Quina() {

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
export default Quina