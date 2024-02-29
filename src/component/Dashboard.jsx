import {
    FaAd,
    FaBook,
    FaCalendar,
    FaCommentDots,
    FaEnvelope,
    FaHome,
    FaList,
    FaSearch,
    FaShoppingCart,
    FaUserFriends,
    FaUsers,
    FaUtensils,
  } from "react-icons/fa";
const Dashboard = () => {
    return (
        <div>
        {" "}
        <div className="flex">
          {/* dashboard side bar */}
          <div className="w-64 min-h-screen bg-white text-black">
            <ul className="menu p-4">
              <>
                <li>
                  <a href="#">
                    <FaHome></FaHome>
                    Admin Home
                  </a>
                </li>
                <li>
                  <FaUtensils></FaUtensils>
                  Add Items
                </li>
                <li>
                  <FaList></FaList>
                  Manage Items
                </li>
                <li>
                  <FaBook></FaBook>
                  Manage Bookings
                </li>
                <li>
                  <FaUsers></FaUsers>
                  All Users
                </li>
  
                <li>
                  <FaHome></FaHome>
                  User Home
                </li>
                <li>
                  <FaCalendar></FaCalendar>
                  Not History
                </li>
                <li>
                  <FaShoppingCart></FaShoppingCart>
                </li>
                <li>
                  <FaAd></FaAd>
                  Add a Review
                </li>
                <li>
                  <FaList></FaList>
                  Real Payment History
                </li>
              </>
              <>
                {/* <li>
            <Link href = "/dashboard/adminProfile" >
              <span span className = {
                nav-link ${pathname === '/dashboard/adminProfile' ? 'active' : ' rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1'}
              } >
                <CgProfile></CgProfile>
            Admin Profile</span>
            </Link>
          </li> */}
                {/* 
          <li>
            <Link href="/dashboard/addPost">
              <span className={nav-link ${pathname === '/dashboard/addPost' ? 'active' : ' rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1'}}><FaSignsPost></FaSignsPost>
            Blog Add</span>
            </Link>
          </li> */}
  
                {/* <li>
            <Link Link href = "/dashboard/parcelManage" >
              <span className={nav-link ${pathname === '/dashboard/parcelManage' ? 'active' : ' rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1'}}><FaBoxOpen></FaBoxOpen>
            Parcels Manage</span>
            </Link>
          </li> */}
  
                {/* <li>
                  <Link href="/dashboard/usersManage">
                    <span
                      className={`nav-link ${
                        pathname === "/dashboard/usersManage"
                          ? "active"
                          : " rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1"
                      }`}
                    >
                      <FaUsers></FaUsers>
                      Users Manage
                    </span>
                  </Link>
                </li> */}
  
                {/* <li href="#">
                  <span>
                    <FaUser></FaUser>
                    Delivery Boy
                  </span>
                </li> */}
  
                {/* <li>
            <Link href="/dashboard/application">
              <span className={nav-link ${pathname === '/dashboard/application' ? 'active' : ' rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1'}}> <FaBriefcase></FaBriefcase>
            Application</span>
            </Link>
          </li>
  
          <li>
            <Link href="/dashboard/returnOrder">
              <span className={nav-link ${pathname === '/dashboard/returnOrder' ? 'active' : ' rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out flex items-center gap-1'}}><GiReturnArrow />
            Return Order</span>
            </Link>
          </li> */}
              </>
  
              <div className="divider"></div>
  
              {/* shared nav link */}
              <li>
                <FaHome></FaHome>
                Home
              </li>
              <li>
                <FaSearch></FaSearch>
                Menu
              </li>
              <li>
                <FaEnvelope></FaEnvelope>
                Contact
              </li>
            </ul>
          </div>
          {/* dashboard content */}
          {/* <div className="flex-1 p-8">
      <Outlet></Outlet>
    </div> */}
          <div>
            <div className="px-4 py-8 h-screen bg-[#010313] text-white space-y-8">
              <h2 className="text-2xl font-bold">
                Hi, <span className="text-orange-700">Ayrin Rahat Promi</span>{" "}
                Welcome Back!
              </h2>
  
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="flex justify-center items-center space-x-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-8 py-8 rounded-lg">
                  <span className="text-5xl">{/* <SiTask></SiTask> */}</span>
                  <div>
                    <h2 className="text-2xl font-bold">5</h2>
                    <p className="text-lg font-bold">Orders</p>
                  </div>
                </div>
  
                <div className="flex justify-center items-center space-x-5 bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] px-8 py-8 rounded-lg">
                  <span className="text-5xl">
                    <FaUserFriends/>
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold">06</h2>
                    <p className="text-lg font-bold">Users</p>
                  </div>
                </div>
  
                <div className="flex justify-center items-center space-x-5 bg-gradient-to-r from-[#FE4880] to-[#FECDE9] px-8 py-8 rounded-lg">
                  <span className="text-5xl">
                    <FaCommentDots></FaCommentDots>
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold">10</h2>
                    <p className="text-lg font-bold">Reviews</p>
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
      </div>
    );
  };
    

export default Dashboard;