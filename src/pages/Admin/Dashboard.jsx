import Cards from "../../components/Cards";
import Chart from "../../components/Chart";
import useAdminDashboard from "../../hooks/useAdminDashboard";

const Dashboard = () => {
    const { isLoading, data } = useAdminDashboard();
    const cardValues = [
        {
            name: "Total Employer",
            value: data?.total?.employeers,
            bgColor: "secondary",
        },
        {
            name: "Total Candidates",
            value: data?.total?.applicants,
            bgColor: "tertiary",
        },
        { name: "Total job", value: data?.total?.jobs, bgColor: "quaternary" },
    ];

    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <div className="dashboard">
                    <Cards cardValues={cardValues} />
                </div>
            )}
        </>
    );
};

export default Dashboard;
