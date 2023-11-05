import axios from "axios";
import Cards from "../../components/Cards";
import Chart from "../../components/Chart";
import { useAuthContext } from "../../context/authContext";
import { useEffect } from "react";

const Dashboard = () => {
    const auth = useAuthContext();

    const cardValues = [
        { name: "Job Category", value: 100, bgColor: "primary" },
        { name: "Total Employer", value: 100, bgColor: "secondary" },
        { name: "Total Candidates", value: 100, bgColor: "tertiary" },
        { name: "Total job", value: 100, bgColor: "quaternary" },
    ];

    return (
        <>
            <div className="dashboard">
                <Cards cardValues={cardValues} />
                {/* <Chart /> */}
            </div>
        </>
    );
};

export default Dashboard;
