import { useEffect, useState } from "react";
import Sidebar from "../Sidebar";

const AllEmployees = () => {     
  const [employee, setEmployee] = useState([]);
  console.log(employee);
  useEffect(() => {
    fetch("https://newspaper-final-server.vercel.app/articles")
      .then((res) => res.json())
      .then((data) => setEmployee(data));
  }, []);

  
    return (
      <>
    <Sidebar/>
        <div className=" -mt-[650px] ml-48 w-96 ">
      <div className="overflow-x-auto h-screen  w-[1170px]">
        <table className="table mb-20">
          {/* head */}
          <thead className="">
            <tr>
              {/* <th></th> */}              
              <th>Name</th>
              <th>Image</th>
              <th>Email</th>
              <th>Joining Date</th>
              <th>Designation</th>
              <th>Department</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {employee.map((item) => (
              <tr key={item._id} className="hover">
                {/* <td className="-ml-5">{index + 1}</td> */}
                <td className="-ml-10">{item.publisher}</td>
                <td className="-ml-5">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-8 h-8">
                        <img src={item.logo} alt="Avatar Component" />
                      </div>
                    </div>                    
                  </div>
                </td>
                <td className="-ml-10">{item.publisherEmail}</td>
                <td>
                  <div className="w-24 -ml-4">{item.createdAt}</div>
                </td>
                <td>{item.publisher}</td>
                <td>{item.publisher}</td>              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
    );
};

export default AllEmployees;