import Sidebar from './Sidebar';

const Dashboard = ({ children }) => {
    return (
        <div className="w-full  flex max-lg:flex-wrap gap-4 lg:gap-8 max-w-screen-xl">
            <div className="max-lg:w-full max-lg:relative lg:sticky lg:top-40   ">
                <Sidebar />
            </div>
            <div className="darkAnimation w-full z-0">
                {/* <div className=" dark:text-white shadow-soft dark:shadow-[#ffffff10] dark:shadow-[1px_1px_60px_10px] bg-white dark:bg-dark-gray rounded-xl p-4">
                            gg
                        </div> */}
                {children}
            </div>
        </div>
    );
};

export default Dashboard;