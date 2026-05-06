import Background from "../../components/public/Background";
import Dashboard from "../../components/public/Dashboard";
import Navbar from "../../components/public/Navbar";

const Index = () => {
    return (
        <Background>
            <Navbar />
            <Dashboard>
                <div className="darkAnimation dark:text-white shadow-soft dark:shadow-[#ffffff10] dark:shadow-[1px_1px_30px_10px] bg-white dark:bg-dark-gray rounded-xl p-4">
                    gg
                </div>
            </Dashboard>
        </Background>
    );
};

export default Index;