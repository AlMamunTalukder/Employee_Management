import {FaCommentDots,  FaUserFriends} from "react-icons/fa";

import Sidebar from "../component/Sidebar";

const Dashboard = () => {
    return (
        <div className="flex">
         <Sidebar/>
        

          <div>
            <div className="px-20 py-8 h-screen bg-[#010313] text-white space-y-8 -mt-10 w-[1180px]">
              <h2 className="text-2xl font-bold">
              Welcome to <span className="text-orange-700">Employee Management </span>{" "}
                 Page
              </h2>
  
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="flex justify-center items-center space-x-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 py-8 rounded-lg">
                  <span className="text-5xl">{/* <SiTask></SiTask> */}</span>
                  <div>
                    <h2 className="text-2xl font-bold">16</h2>
                    <p className="text-lg font-bold">Employee</p>
                  </div>
                </div>
  
                <div className="flex justify-center items-center space-x-5 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] px-8 py-8 rounded-lg">
                  <span className="text-5xl">
                    <FaUserFriends/>
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold">06</h2>
                    <p className="text-lg font-bold">Old Employees</p>
                  </div>
                </div>
  
                <div className="flex justify-center items-center space-x-5 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] px-8 py-8 rounded-lg">
                  <span className="text-5xl">
                    <FaCommentDots></FaCommentDots>
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold">10</h2>
                    <p className="text-lg font-bold">New Employees</p>
                  </div>
                </div>
              </div>
  
              <div className="lg:flex px-2 lg:flex-col lg:justify-center lg:items-center shadow-xl rounded-2xl">
                <div className="h-24 lg:w-2/3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
                <div className="h-72 lg:w-2/3 flex flex-col justify-center items-center">
                  <img
                    className="rounded-full lg:-mt-32"
                    src="https://i.ibb.co/SKhSR0W/avatardefault-92824.png"
                    width={60}
                    height={20}
                    alt="User Image"
                  ></img>
                  <div className="badge mt-2 badge-accent badge-outline">
                    User
                  </div>
                  <h2 className="py-5">
                    <span className="font-bold mr-2">User Id:</span>
                    <span className="text-md text-purple-400">
                      {" "}
                      Your Id Not found
                    </span>
                  </h2>
                  <div className="grid lg:grid-cols-3 gap-5 justify-center">
                    <div className="space-y-2">
                      <p className="font-bold">Name</p>
                      <p className="text-xs text-purple-400"> Name Not Found</p>
                    </div>
                    <div className="space-y-2">
                      <p className="font-bold">Email:</p>
                      <p className="text-xs text-purple-400">Email Not Found</p>
                    </div>
                    <div className="space-y-2">
                      <button className="text-white text-xs mr-2 font-bold py-2 px-4 rounded border border-purple-700  hover:bg-purple-700">
                        Update Profile
                      </button>
                      <button className="text-white text-xs font-bold py-2 px-2 rounded border border-purple-700  hover:bg-purple-700">
                        Change Password
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
    
  };
    

export default Dashboard;