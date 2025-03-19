import {Edit, AddCircleOutline, RemoveCircleOutline} from "@mui/icons-material";
import {Button} from "@mui/material";

const BalanceCard = () =>{
    return (
        <div className={"flex justify-center"}>

            <div className="bg-primaryLight border-4 flex flex-col items-center
                    w-[50%] p-4 rounded-xl shadow-lg">
                <div className="flex justify-between w-full">
                    <div className="flex flex-col justify-start ml-3">Denar Savings</div>
                    <div className="flex flex-col justify-end">
                        <Button color={"#000"}>
                            <Edit/>
                        </Button>
                    </div>
                </div>


                <div className="font-semibold text-4xl py-10">{2300}ден</div>

                <div className="flex gap-4">
                    <Button color={"#000"}>
                        <AddCircleOutline sx={{fontSize: 40}}/>
                    </Button>
                    <Button color={"#000"}>
                        <RemoveCircleOutline sx={{fontSize: 40}}/>
                    </Button>
                </div>
            </div>
        </div>

    );
}

export default BalanceCard;