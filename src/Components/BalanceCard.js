import {Edit, AddCircleOutline, RemoveCircleOutline} from "@mui/icons-material";

const BalanceCard = () =>{
    return (
        <div className={"mt-9 bg-red"}>
            <div><Edit/></div>
            <div>2300den</div>
            <div>
                <div><AddCircleOutline/></div>
                <div><RemoveCircleOutline/></div>
            </div>
        </div>
    );
}

export default BalanceCard;