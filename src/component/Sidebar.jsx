import { IoHome } from "react-icons/io5";
import { IoLogoWechat } from "react-icons/io5";
import { IoSettingsSharp } from "react-icons/io5";
import { FaDoorOpen } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { FaHome, FaUsers} from "react-icons/fa";
import { Link } from "react-router-dom";


const Sidebar = () => {
    return (
        <div>
            
            <div className="w-64 min-h-screen bg-gray-900 text-white pt-10 -ml-24 -mt-10">
            <ul className="menu p-4  mb-32"> 
                <li>
                  <a href="/dashboard">
                    <FaHome></FaHome>
                    Employee Management
                  </a>
                </li>
                <li className="ml-4">
                  <a href="/allemployees">                    
                      <FaUsers></FaUsers>
                      All Employees                    
                  </a>
                </li>
                <li className="ml-4">
                  <a href="/newEmployee">                    
                  <IoPersonAdd />
                      Add New Employees                    
                  </a>
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
        </div>
    );
};

export default Sidebar;