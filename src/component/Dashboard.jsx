import {FaCommentDots, FaHome, FaUserFriends, FaUsers} from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoHome } from "react-icons/io5";
import { IoLogoWechat } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { FaDoorOpen } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";

const Dashboard = () => {
    return (
        <div className="flex">
          <div className="w-64 min-h-screen bg-white text-black  ">
            <ul className="menu p-4 mt-10 mb-32"> 
                <li>
                  <a href="#">
                    <FaHome></FaHome>
                    Employee Management
                  </a>
                </li>
                <li className="ml-4">
                  <Link href="/dashboard/usersManage">                    
                      <FaUsers></FaUsers>
                      All Employees                    
                  </Link>
                </li>
                <li className="ml-4">
                  <Link href="/dashboard/usersManage">                    
                  <IoPersonAdd />
                      Add New Employees                    
                  </Link>
                </li>       
               
            </ul>
            <div className="divider"></div> 
            <div className="flex-1 items-center px-4 ml-10">
			<ul className="pt-2 pb-4 space-y-1 text-sm">
				<li className="rounded-sm">
					<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
          <IoHome />
						<span>Home</span>
					</a>
				</li>
			
				<li className="rounded-sm">
					<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
          <IoLogoWechat />
						<span>Chat</span>
					</a>
				</li>
				
				<li className="rounded-sm">
					<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
          <IoSettingsSharp />
						<span>Settings</span>
					</a>
				</li>
				<li className="rounded-sm">
					<a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
          <FaDoorOpen />
						<span>Logout</span>
					</a>
				</li>
			</ul>
		</div>
            
          </div>
        
<div className="flex-1 p-8">
    
    </div> 
          <div>
            <div className="px-4 py-8 h-screen bg-[#010313] text-white space-y-8">
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