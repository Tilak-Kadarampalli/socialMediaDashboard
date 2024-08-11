
import { Card , CardHead, CardValue} from "./styledComponents";

const KPICard = (props) =>{
    const {details } = props 
    const {heading, value} = details 

    return(
        <Card>
            <CardHead>{heading}</CardHead>
            <CardValue>{value}</CardValue>
        </Card>
    )
}

export default KPICard