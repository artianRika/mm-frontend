import BalanceCard from "./BalanceCard";

const MainView = () =>{
    return (
        <div>
            <BalanceCard name={"Denar Savings"} amount={3000} currency={"мкд"} />
        </div>
    );
}

export default MainView